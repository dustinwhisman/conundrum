import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consonant, GameState, Vowel } from '../letters';

@Component({
  selector: 'app-letters-game-board',
  templateUrl: './letters-game-board.component.html',
  styleUrls: ['./letters-game-board.component.css'],
})
export class LettersGameBoardComponent {
  @Input() state!: GameState;
  @Input() word!: Array<Consonant | Vowel>;
  @Output() removeLetter = new EventEmitter<{
    letter: Consonant | Vowel;
    index: number;
  }>();

  lettersPlaceholder = new Array(9);
}
