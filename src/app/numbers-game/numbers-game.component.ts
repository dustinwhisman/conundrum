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
  timeRemaining = 0;
  roundDuration = 30;
  closestValue = 0;
  targetValue = 0;

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

    this.state = 'game-setting-target';
    this.startCountdown(3);
  }

  startCountdown(durationInSeconds: number) {
    this.timeRemaining = durationInSeconds;
    const endTime = Date.now() + durationInSeconds * 1000;

    const checkTime = () => {
      const now = Date.now();
      const remaining = endTime - now;

      if (remaining <= 0) {
        this.timeRemaining = 0;
        if (this.state === 'game-setting-target') {
          this.targetValue = Math.ceil(Math.random() * 900 + 100);
          this.state = 'game-starting-soon';

          this.startCountdown(3);
          return;
        }

        if (this.state === 'game-starting-soon') {
          this.state = 'game-in-progress';

          if (this.roundDuration > 0) {
            this.startCountdown(this.roundDuration);
          }
          return;
        }

        if (this.state === 'game-in-progress') {
          this.state = 'game-ended';
          return;
        }
      } else {
        this.timeRemaining = Math.ceil(remaining / 1000);
        requestAnimationFrame(checkTime);
      }
    };

    checkTime();
  }
}
