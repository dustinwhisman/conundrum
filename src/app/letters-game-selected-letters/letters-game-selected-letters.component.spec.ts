import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersGameSelectedLettersComponent } from './letters-game-selected-letters.component';

describe('LettersGameSelectedLettersComponent', () => {
  let component: LettersGameSelectedLettersComponent;
  let fixture: ComponentFixture<LettersGameSelectedLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersGameSelectedLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersGameSelectedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
