import { Injectable } from '@angular/core';
import { type Consonant, consonants, type Vowel, vowels } from './letters';

@Injectable({
  providedIn: 'root',
})
export class LettersService {
  vowels = [...vowels];
  consonants = [...consonants];

  constructor() {}

  getVowel(): Vowel {
    const index = Math.floor(Math.random() * this.vowels.length);
    const letter = this.vowels[index];
    this.vowels.splice(index, 1);
    return letter;
  }

  getConsonant(): Consonant {
    const index = Math.floor(Math.random() * this.consonants.length);
    const letter = this.consonants[index];
    this.consonants.splice(index, 1);
    return letter;
  }

  restockLetters() {
    this.consonants = [...consonants];
    this.vowels = [...vowels];
  }
}
