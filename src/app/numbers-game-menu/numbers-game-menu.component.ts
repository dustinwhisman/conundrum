import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameState } from '../numbers';

@Component({
  selector: 'app-numbers-game-menu',
  templateUrl: './numbers-game-menu.component.html',
  styleUrls: ['./numbers-game-menu.component.css'],
})
export class NumbersGameMenuComponent {
  @Input() state!: GameState;
  @Input() roundDuration!: number;
  @Output() chooseSpread = new EventEmitter<{
    bigNumbers: number;
    smallNumbers: number;
  }>();
  @Output() clearWork = new EventEmitter();
  @Output() resetGame = new EventEmitter();
}
