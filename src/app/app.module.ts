import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { LettersGameComponent } from './letters-game/letters-game.component';
import { NumbersGameComponent } from './numbers-game/numbers-game.component';
import { SettingsComponent } from './settings/settings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { LettersGameInstructionsComponent } from './letters-game-instructions/letters-game-instructions.component';
import { LettersGameBoardComponent } from './letters-game-board/letters-game-board.component';
import { LettersGameSelectedLettersComponent } from './letters-game-selected-letters/letters-game-selected-letters.component';
import { LettersGameMenuComponent } from './letters-game-menu/letters-game-menu.component';
import { NumbersGameInstructionsComponent } from './numbers-game-instructions/numbers-game-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectionComponent,
    LettersGameComponent,
    NumbersGameComponent,
    SettingsComponent,
    NavMenuComponent,
    RadioGroupComponent,
    LettersGameInstructionsComponent,
    LettersGameBoardComponent,
    LettersGameSelectedLettersComponent,
    LettersGameMenuComponent,
    NumbersGameInstructionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
