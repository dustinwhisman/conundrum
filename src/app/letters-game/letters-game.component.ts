import { Component } from '@angular/core';
import type { Consonant, Vowel, GameState } from '../letters';
import { LettersService } from '../letters.service';

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

  constructor(private lettersService: LettersService) {}

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
      console.log('Get ready. The game starts in 3, 2, 1, now!');
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
    console.log(this.word.join(''));
  }

  removeLetter(letter: Consonant | Vowel, index: number) {
    this.word.splice(index, 1);
    const matchingLetter = this.letters.find(
      (l) => l.letter === letter && l.isInUse
    );
    if (matchingLetter != null) {
      matchingLetter.isInUse = false;
    }
    console.log(this.word.join(''));
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
}
