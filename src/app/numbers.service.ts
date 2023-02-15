import { Injectable } from '@angular/core';
import {
  type BigNumber,
  bigNumbers,
  type SmallNumber,
  smallNumbers,
} from './numbers';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  bigNumbers = [...bigNumbers];
  smallNumbers = [...smallNumbers];

  constructor() {}

  getBigNumber(): BigNumber {
    const index = Math.floor(Math.random() * this.bigNumbers.length);
    const number = this.bigNumbers[index];
    this.bigNumbers.splice(index, 1);
    return number;
  }

  getSmallNumber(): SmallNumber {
    const index = Math.floor(Math.random() * this.smallNumbers.length);
    const number = this.smallNumbers[index];
    this.smallNumbers.splice(index, 1);
    return number;
  }
}
