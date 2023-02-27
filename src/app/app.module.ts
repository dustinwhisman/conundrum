import { NgModule, isDevMode } from '@angular/core';
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
import { NumbersGameTargetComponent } from './numbers-game-target/numbers-game-target.component';
import { NumbersGameCombinedNumbersComponent } from './numbers-game-combined-numbers/numbers-game-combined-numbers.component';
import { NumbersGameOperatorsComponent } from './numbers-game-operators/numbers-game-operators.component';
import { NumbersGameStartingNumbersComponent } from './numbers-game-starting-numbers/numbers-game-starting-numbers.component';
import { NumbersGameMenuComponent } from './numbers-game-menu/numbers-game-menu.component';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    NumbersGameTargetComponent,
    NumbersGameCombinedNumbersComponent,
    NumbersGameOperatorsComponent,
    NumbersGameStartingNumbersComponent,
    NumbersGameMenuComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
