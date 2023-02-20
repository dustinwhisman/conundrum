import { Component, Input } from '@angular/core';
import { GameState } from '../numbers';

@Component({
  selector: 'app-numbers-game-instructions',
  templateUrl: './numbers-game-instructions.component.html',
  styleUrls: ['./numbers-game-instructions.component.css'],
})
export class NumbersGameInstructionsComponent {
  @Input() state!: GameState;
  @Input() closestDistance!: number;
  @Input() timeRemaining!: number;
}
