import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import type { Consonant, Vowel, GameState } from '../letters';
import { LettersService } from '../letters.service';
import { SettingsService } from '../settings.service';

type Letter = {
  isInUse: boolean;
  letter: Consonant | Vowel;
};

@Component({
  selector: 'app-letters-game',
  templateUrl: './letters-game.component.html',
  styleUrls: ['./letters-game.component.css'],
})
export class LettersGameComponent {
  state: GameState = 'game-setup';
  letters: Array<Letter> = [];
  word: Array<Consonant | Vowel> = [];
  vowelCount = 0;
  consonantCount = 0;
  timeRemaining = 3;
  roundDuration = 30;
  letterPositioning = 'linear';
  longestWord = '';
  lettersPlaceholder = new Array(9);

  constructor(
    private lettersService: LettersService,
    private settingsService: SettingsService
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

  chooseVowel() {
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

  chooseConsonant() {
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

  addLetter(letter: Letter) {
    letter.isInUse = true;
    this.word.push(letter.letter);
    this.checkWordValidity();
  }

  removeLetter(letter: Consonant | Vowel, index: number) {
    this.word.splice(index, 1);
    const matchingLetter = this.letters.find(
      (l) => l.letter === letter && l.isInUse
    );
    if (matchingLetter != null) {
      matchingLetter.isInUse = false;
    }
    this.checkWordValidity();
  }

  clearWord() {
    this.letters.forEach((letter) => {
      letter.isInUse = false;
    });
    this.word = [];
  }

  startCountdown(durationInSeconds: number) {
    const endTime = Date.now() + durationInSeconds * 1000;

    const checkTime = () => {
      const now = Date.now();
      const remaining = endTime - now;

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

  resetGame() {
    this.state = 'game-setup';
    this.letters = [];
    this.word = [];
    this.vowelCount = 0;
    this.consonantCount = 0;
    this.timeRemaining = 3;
    this.longestWord = '';
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
    }
  }
}
