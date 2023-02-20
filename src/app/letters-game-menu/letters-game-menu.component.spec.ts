import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersGameMenuComponent } from './letters-game-menu.component';

describe('LettersGameMenuComponent', () => {
  let component: LettersGameMenuComponent;
  let fixture: ComponentFixture<LettersGameMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersGameMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersGameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
