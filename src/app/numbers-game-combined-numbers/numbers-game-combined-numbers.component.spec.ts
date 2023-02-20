import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameCombinedNumbersComponent } from './numbers-game-combined-numbers.component';

describe('NumbersGameCombinedNumbersComponent', () => {
  let component: NumbersGameCombinedNumbersComponent;
  let fixture: ComponentFixture<NumbersGameCombinedNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameCombinedNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameCombinedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
