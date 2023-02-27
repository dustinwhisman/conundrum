import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import type { ResultOf, Number, GameState } from '../numbers';
import { NumbersService } from '../numbers.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-numbers-game',
  templateUrl: './numbers-game.component.html',
  styleUrls: ['./numbers-game.component.css'],
})
export class NumbersGameComponent implements OnInit {
  state: GameState = 'game-setup';
  startingNumbers: Array<Number> = [];
  combinedNumbers: Array<Number> = [];
  selectedNumber: Number | null = null;
  operator: ResultOf['operation'] | null = null;
  endTime = Date.now();
  timeRemaining = 0;
  roundDuration = 30;
  closestDistance = Infinity;
  closestValue = 0;
  targetValue = 0;

  constructor(
    private numbersService: NumbersService,
    private settingsService: SettingsService,
    private meta: Meta
  ) {
    const { timerDuration } = this.settingsService.getSettings();
    if (timerDuration !== 'off') {
      this.roundDuration = Number.parseInt(timerDuration, 10);
    } else {
      this.roundDuration = 0;
    }
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content:
        'Play the numbers game! Choose a selection of 6 big or small numbers, then use your arithmetic skills to try to hit a randomly selected target.',
    });
  }

  onChooseSpread({
    bigNumbers,
    smallNumbers,
  }: {
    bigNumbers: number;
    smallNumbers: number;
  }) {
    if (this.state !== 'game-setup') {
      return;
    }

    for (let i = 0; i < bigNumbers; i += 1) {
      this.startingNumbers.push({
        isInUse: false,
        isSelected: false,
        number: this.numbersService.getBigNumber(),
        resultOf: null,
      });
    }

    for (let i = 0; i < smallNumbers; i += 1) {
      this.startingNumbers.push({
        isInUse: false,
        isSelected: false,
        number: this.numbersService.getSmallNumber(),
        resultOf: null,
      });
    }

    this.state = 'game-setting-target';
    this.startCountdown(3);
  }

  startCountdown(durationInSeconds: number) {
    this.timeRemaining = durationInSeconds;
    this.endTime = Date.now() + durationInSeconds * 1000;

    const checkTime = () => {
      const now = Date.now();
      const remaining = this.endTime - now;

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

  doMath(
    numberOne: Number,
    numberTwo: Number,
    operator: ResultOf['operation']
  ) {
    let result: number;
    switch (operator) {
      case 'multiplication':
        result = numberOne.number * numberTwo.number;
        break;
      case 'division':
        // for simplicity, we'll round down any division resulting in remainders
        result = Math.floor(numberOne.number / numberTwo.number);
        break;
      case 'addition':
        result = numberOne.number + numberTwo.number;
        break;
      case 'subtraction':
        // for simplicity, we only want positive numbers
        result = Math.abs(numberOne.number - numberTwo.number);
        break;
    }

    const distanceAway = Math.abs(this.targetValue - result);

    if (distanceAway < this.closestDistance) {
      this.closestDistance = distanceAway;
      this.closestValue = result;
    }

    if (distanceAway === 0) {
      this.state = 'game-ended';
      this.endTime = Date.now();
    }

    if (numberOne.resultOf != null) {
      const index = this.combinedNumbers.findIndex(
        ({ resultOf }: Number) =>
          resultOf != null &&
          Object.keys(resultOf).every(
            (key) =>
              resultOf[key as keyof ResultOf] ===
              numberOne.resultOf?.[key as keyof ResultOf]
          )
      );

      if (index > -1) {
        this.combinedNumbers.splice(index, 1);
      }
    }

    if (numberTwo.resultOf != null) {
      const index = this.combinedNumbers.findIndex(
        ({ resultOf }: Number) =>
          resultOf != null &&
          Object.keys(resultOf).every(
            (key) =>
              resultOf[key as keyof ResultOf] ===
              numberTwo.resultOf?.[key as keyof ResultOf]
          )
      );

      if (index > -1) {
        this.combinedNumbers.splice(index, 1);
      }
    }

    this.combinedNumbers.push({
      isInUse: false,
      isSelected: false,
      number: result,
      resultOf: {
        firstNumber: numberOne.number,
        secondNumber: numberTwo.number,
        operation: operator,
      },
    });
  }

  handleNumberClick(number: Number) {
    if (this.selectedNumber == null) {
      this.toggleIsSelected(number);
      this.selectedNumber = number;
      return;
    }

    if (this.operator == null) {
      return;
    }

    this.toggleIsInUse(this.selectedNumber);
    this.toggleIsSelected(this.selectedNumber);
    this.toggleIsInUse(number);

    this.doMath(this.selectedNumber, number, this.operator);
    this.selectedNumber = null;
  }

  handleOperatorClick(operator: ResultOf['operation']) {
    this.operator = operator;
  }

  toggleIsSelected(number: Number) {
    number.isSelected = !number.isSelected;
  }

  toggleIsInUse(number: Number) {
    number.isInUse = !number.isInUse;
  }

  onClearWork() {
    this.combinedNumbers = [];
    this.selectedNumber = null;
    this.operator = null;
    this.startingNumbers.forEach((number) => {
      number.isInUse = false;
      number.isSelected = false;
    });
  }

  onResetGame() {
    this.state = 'game-setup';
    this.startingNumbers = [];
    this.combinedNumbers = [];
    this.selectedNumber = null;
    this.operator = null;
    this.timeRemaining = 0;
    this.closestDistance = Infinity;
    this.closestValue = 0;
    this.targetValue = 0;
    this.numbersService.restockNumbers();
  }
}
