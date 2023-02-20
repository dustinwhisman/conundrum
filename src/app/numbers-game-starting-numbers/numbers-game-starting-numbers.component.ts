import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState, Number } from '../numbers';

@Component({
  selector: 'app-numbers-game-starting-numbers',
  templateUrl: './numbers-game-starting-numbers.component.html',
  styleUrls: ['./numbers-game-starting-numbers.component.css'],
})
export class NumbersGameStartingNumbersComponent {
  @Input() state!: GameState;
  @Input() startingNumbers!: Array<Number>;
  @Output() selectNumber = new EventEmitter<Number>();
}
