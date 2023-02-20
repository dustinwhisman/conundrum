import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameStartingNumbersComponent } from './numbers-game-starting-numbers.component';

describe('NumbersGameStartingNumbersComponent', () => {
  let component: NumbersGameStartingNumbersComponent;
  let fixture: ComponentFixture<NumbersGameStartingNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameStartingNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameStartingNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
