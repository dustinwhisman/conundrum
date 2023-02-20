import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameOperatorsComponent } from './numbers-game-operators.component';

describe('NumbersGameOperatorsComponent', () => {
  let component: NumbersGameOperatorsComponent;
  let fixture: ComponentFixture<NumbersGameOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
