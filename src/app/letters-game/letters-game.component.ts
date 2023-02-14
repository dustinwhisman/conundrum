import { Component } from '@angular/core';
import type { Consonant, Vowel, GameState } from '../letters';
import { LettersService } from '../letters.service';

@Component({
  selector: 'app-letters-game',
  templateUrl: './letters-game.component.html',
  styleUrls: ['./letters-game.component.css'],
})
export class LettersGameComponent {
  state: GameState = 'game-setup';
  letters: Array<Consonant | Vowel> = [];
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

    this.letters.push(this.lettersService.getVowel());
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

    this.letters.push(this.lettersService.getConsonant());
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
}
