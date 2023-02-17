import { Component, Input } from '@angular/core';
import { GameState } from '../letters';

@Component({
  selector: 'app-letters-game-instructions',
  templateUrl: './letters-game-instructions.component.html',
  styleUrls: ['./letters-game-instructions.component.css'],
})
export class LettersGameInstructionsComponent {
  @Input() state!: GameState;
  @Input() timeRemaining!: number;
  @Input() roundDuration!: number;
  @Input() longestWord!: string;
}
