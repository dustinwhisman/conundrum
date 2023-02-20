import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LettersGameBoardComponent } from '../letters-game-board/letters-game-board.component';
import { LettersGameInstructionsComponent } from '../letters-game-instructions/letters-game-instructions.component';
import { LettersGameMenuComponent } from '../letters-game-menu/letters-game-menu.component';
import { LettersGameSelectedLettersComponent } from '../letters-game-selected-letters/letters-game-selected-letters.component';

import { LettersGameComponent } from './letters-game.component';

describe('LettersGameComponent', () => {
  let component: LettersGameComponent;
  let fixture: ComponentFixture<LettersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LettersGameComponent,
        LettersGameInstructionsComponent,
        LettersGameSelectedLettersComponent,
        LettersGameBoardComponent,
        LettersGameMenuComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
