import { Component } from '@angular/core';
import type { BigNumber, SmallNumber, GameState } from '../numbers';
import { NumbersService } from '../numbers.service';
import { SettingsService } from '../settings.service';

type ResultOf = {
  firstNumber: number;
  secondNumber: number;
  operation: 'multiplication' | 'division' | 'addition' | 'subtraction';
};

type Number = {
  isInUse: boolean;
  number: BigNumber | SmallNumber;
  resultOf: ResultOf | null;
};

@Component({
  selector: 'app-numbers-game',
  templateUrl: './numbers-game.component.html',
  styleUrls: ['./numbers-game.component.css'],
})
export class NumbersGameComponent {
  state: GameState = 'game-setup';
  startingNumbers: Array<Number> = [];
  combinedNumbers: Array<Number> = [];
  timeRemaining = 3;
  roundDuration = 30;
  closestValue = 0;

  constructor(
    private numbersService: NumbersService,
    private settingsService: SettingsService
  ) {
    const { timerDuration } = this.settingsService.getSettings();
    if (timerDuration !== 'off') {
      this.roundDuration = Number.parseInt(timerDuration, 10);
    } else {
      this.roundDuration = 0;
    }
  }

  chooseSpread(bigCount: number, smallCount: number) {
    if (this.state !== 'game-setup') {
      return;
    }

    for (let i = 0; i < bigCount; i += 1) {
      this.startingNumbers.push({
        isInUse: false,
        number: this.numbersService.getBigNumber(),
        resultOf: null,
      });
    }

    for (let i = 0; i < smallCount; i += 1) {
      this.startingNumbers.push({
        isInUse: false,
        number: this.numbersService.getSmallNumber(),
        resultOf: null,
      });
    }

    console.log(this.startingNumbers);
    this.state = 'game-starting-soon';
  }
}
