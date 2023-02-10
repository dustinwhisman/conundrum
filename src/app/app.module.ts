import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { LettersGameComponent } from './letters-game/letters-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectionComponent,
    LettersGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
