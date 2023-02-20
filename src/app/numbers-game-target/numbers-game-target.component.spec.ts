import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameTargetComponent } from './numbers-game-target.component';

describe('NumbersGameTargetComponent', () => {
  let component: NumbersGameTargetComponent;
  let fixture: ComponentFixture<NumbersGameTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
