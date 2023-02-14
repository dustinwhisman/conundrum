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

  constructor(private lettersService: LettersService) {}

  chooseVowel() {
    if (this.state !== 'game-setup') {
      console.warn('This is not the time for that.');
      return;
    }

    if (this.vowelCount > 5) {
      console.warn('You have selected the maximum number of vowels.');
      return;
    }

    this.letters.push({
      isInUse: false,
      letter: this.lettersService.getVowel(),
    });
    this.vowelCount += 1;
    console.log(this.letters);

    if (this.letters.length >= 9) {
      console.log('Get ready. The game starts in 3, 2, 1, now!');
      this.state = 'game-starting-soon';
      setTimeout(() => {
        console.log('Let the game begin!');
        this.state = 'game-in-progress';
      }, 3000);
    }
  }

  chooseConsonant() {
    if (this.state !== 'game-setup') {
      console.warn('This is not the time for that.');
      return;
    }

    if (this.consonantCount > 5) {
      console.warn('You have selected the maximum number of vowels.');
      return;
    }

    this.letters.push({
      isInUse: false,
      letter: this.lettersService.getConsonant(),
    });
    this.consonantCount += 1;
    console.log(this.letters);

    if (this.letters.length >= 9) {
      console.log('Get ready. The game starts in 3, 2, 1, now!');
      this.state = 'game-starting-soon';
      setTimeout(() => {
        console.log('Let the game begin!');
        this.state = 'game-in-progress';
      }, 3000);
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
}
