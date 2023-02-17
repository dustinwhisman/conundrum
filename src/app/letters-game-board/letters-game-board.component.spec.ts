import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersGameBoardComponent } from './letters-game-board.component';

describe('LettersGameBoardComponent', () => {
  let component: LettersGameBoardComponent;
  let fixture: ComponentFixture<LettersGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersGameBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
