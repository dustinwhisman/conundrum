import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumbersGameCombinedNumbersComponent } from '../numbers-game-combined-numbers/numbers-game-combined-numbers.component';
import { NumbersGameInstructionsComponent } from '../numbers-game-instructions/numbers-game-instructions.component';
import { NumbersGameMenuComponent } from '../numbers-game-menu/numbers-game-menu.component';
import { NumbersGameOperatorsComponent } from '../numbers-game-operators/numbers-game-operators.component';
import { NumbersGameStartingNumbersComponent } from '../numbers-game-starting-numbers/numbers-game-starting-numbers.component';
import { NumbersGameTargetComponent } from '../numbers-game-target/numbers-game-target.component';

import { NumbersGameComponent } from './numbers-game.component';

describe('NumbersGameComponent', () => {
  let component: NumbersGameComponent;
  let fixture: ComponentFixture<NumbersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NumbersGameComponent,
        NumbersGameInstructionsComponent,
        NumbersGameTargetComponent,
        NumbersGameCombinedNumbersComponent,
        NumbersGameOperatorsComponent,
        NumbersGameStartingNumbersComponent,
        NumbersGameMenuComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NumbersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
