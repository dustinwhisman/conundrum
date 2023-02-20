import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbers-game-target',
  templateUrl: './numbers-game-target.component.html',
  styleUrls: ['./numbers-game-target.component.css'],
})
export class NumbersGameTargetComponent {
  @Input() targetValue!: number;
}
