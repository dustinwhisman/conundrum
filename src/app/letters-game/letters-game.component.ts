import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import type { Consonant, Vowel, Letter, GameState } from '../letters';
import { LettersService } from '../letters.service';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-letters-game',
  templateUrl: './letters-game.component.html',
  styleUrls: ['./letters-game.component.css'],
})
export class LettersGameComponent implements OnInit {
  state: GameState = 'game-setup';
  letters: Array<Letter> = [];
  word: Array<Consonant | Vowel> = [];
  vowelCount = 0;
  consonantCount = 0;
  endTime = Date.now();
  timeRemaining = 3;
  roundDuration = 30;
  letterPositioning: Settings['letterPositioning'] = 'linear';
  longestWord = '';
  lettersPlaceholder = new Array(9);

  constructor(
    private lettersService: LettersService,
    private settingsService: SettingsService,
    private meta: Meta
  ) {
    const { timerDuration, letterPositioning } =
      this.settingsService.getSettings();
    if (timerDuration !== 'off') {
      this.roundDuration = Number.parseInt(timerDuration, 10);
    } else {
      this.roundDuration = 0;
    }

    this.letterPositioning = letterPositioning;
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content:
        'Play the letters game! Choose a selection of 9 consonants or vowels, then see how long of a word you can form from those letters.',
    });
  }

  onChooseVowel() {
    if (this.state !== 'game-setup' || this.vowelCount > 5) {
      return;
    }

    this.letters.push({
      isInUse: false,
      letter: this.lettersService.getVowel(),
    });
    this.vowelCount += 1;

    if (this.letters.length >= 9) {
      this.state = 'game-starting-soon';
      this.startCountdown(3);
    }
  }

  onChooseConsonant() {
    if (this.state !== 'game-setup' || this.consonantCount > 5) {
      return;
    }

    this.letters.push({
      isInUse: false,
      letter: this.lettersService.getConsonant(),
    });
    this.consonantCount += 1;

    if (this.letters.length >= 9) {
      this.state = 'game-starting-soon';
      this.startCountdown(3);
    }
  }

  onAddLetter(letter: Letter) {
    letter.isInUse = true;
    this.word.push(letter.letter);
    this.checkWordValidity();
  }

  onRemoveLetter({
    letter,
    index,
  }: {
    letter: Consonant | Vowel;
    index: number;
  }) {
    this.word.splice(index, 1);
    const matchingLetter = this.letters.find(
      (l) => l.letter === letter && l.isInUse
    );
    if (matchingLetter != null) {
      matchingLetter.isInUse = false;
    }
    this.checkWordValidity();
  }

  onClearWord() {
    this.letters.forEach((letter) => {
      letter.isInUse = false;
    });
    this.word = [];
  }

  startCountdown(durationInSeconds: number) {
    this.endTime = Date.now() + durationInSeconds * 1000;

    const checkTime = () => {
      const now = Date.now();
      const remaining = this.endTime - now;

      if (remaining <= 0) {
        this.timeRemaining = 0;
        if (this.state === 'game-starting-soon') {
          this.state = 'game-in-progress';

          if (this.roundDuration > 0) {
            this.startCountdown(this.roundDuration);
          }
          return;
        }

        if (this.state === 'game-in-progress') {
          this.state = 'game-ended';
          return;
        }
      } else {
        this.timeRemaining = Math.ceil(remaining / 1000);
        requestAnimationFrame(checkTime);
      }
    };

    checkTime();
  }

  onResetGame() {
    this.state = 'game-setup';
    this.letters = [];
    this.word = [];
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.timeRemaining = 3;
    this.longestWord = '';
    this.lettersService.restockLetters();
  }

  async checkWordValidity() {
    if (this.word.length < this.longestWord.length) {
      return;
    }

    const request = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.word.join(
        ''
      )}?key=${environment.dictionaryApiKey}`
    );

    const response = await request.json();

    if (response.some((obj: any) => typeof obj === 'object')) {
      this.longestWord = this.word.join('');
      if (this.longestWord.length === 9) {
        this.state = 'game-ended';
        this.endTime = Date.now();
      }
    }
  }
}
