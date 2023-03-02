import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState, Number, ResultOf } from '../numbers';

@Component({
  selector: 'app-numbers-game-operators',
  templateUrl: './numbers-game-operators.component.html',
  styleUrls: ['./numbers-game-operators.component.css'],
})
export class NumbersGameOperatorsComponent {
  @Input() state!: GameState;
  @Input() selectedNumber!: Number | null;
  @Input() operator!: ResultOf['operation'] | null;
  @Output() selectOperator = new EventEmitter<ResultOf['operation']>();
}
