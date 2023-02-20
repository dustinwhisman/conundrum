import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGameMenuComponent } from './numbers-game-menu.component';

describe('NumbersGameMenuComponent', () => {
  let component: NumbersGameMenuComponent;
  let fixture: ComponentFixture<NumbersGameMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersGameMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersGameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
