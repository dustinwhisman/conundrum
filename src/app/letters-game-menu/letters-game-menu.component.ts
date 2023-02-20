import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState } from '../letters';

@Component({
  selector: 'app-letters-game-menu',
  templateUrl: './letters-game-menu.component.html',
  styleUrls: ['./letters-game-menu.component.css'],
})
export class LettersGameMenuComponent {
  @Input() state!: GameState;
  @Input() consonantCount!: number;
  @Input() vowelCount!: number;
  @Input() roundDuration!: number;
  @Output() chooseConsonant = new EventEmitter();
  @Output() chooseVowel = new EventEmitter();
  @Output() clearWord = new EventEmitter();
  @Output() resetGame = new EventEmitter();
}
