import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameInstructionsComponent } from './numbers-game-instructions.component';

describe('NumbersGameInstructionsComponent', () => {
  let component: NumbersGameInstructionsComponent;
  let fixture: ComponentFixture<NumbersGameInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
