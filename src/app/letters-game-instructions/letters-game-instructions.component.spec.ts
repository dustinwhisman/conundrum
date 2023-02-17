import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersGameInstructionsComponent } from './letters-game-instructions.component';

describe('LettersGameInstructionsComponent', () => {
  let component: LettersGameInstructionsComponent;
  let fixture: ComponentFixture<LettersGameInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersGameInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersGameInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
