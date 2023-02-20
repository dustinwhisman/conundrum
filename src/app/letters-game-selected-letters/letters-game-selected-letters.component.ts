import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState, Letter } from '../letters';
import { Settings } from '../settings';

@Component({
  selector: 'app-letters-game-selected-letters',
  templateUrl: './letters-game-selected-letters.component.html',
  styleUrls: ['./letters-game-selected-letters.component.css'],
})
export class LettersGameSelectedLettersComponent {
  @Input() letterPositioning!: Settings['letterPositioning'];
  @Input() state!: GameState;
  @Input() letters!: Array<Letter>;
  @Output() addLetter = new EventEmitter<Letter>();

  lettersPlaceholder = new Array(9);
}
