import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState, Number } from '../numbers';

@Component({
  selector: 'app-numbers-game-combined-numbers',
  templateUrl: './numbers-game-combined-numbers.component.html',
  styleUrls: ['./numbers-game-combined-numbers.component.css'],
})
export class NumbersGameCombinedNumbersComponent {
  @Input() state!: GameState;
  @Input() combinedNumbers!: Array<Number>;
  @Output() selectNumber = new EventEmitter<Number>();
}
