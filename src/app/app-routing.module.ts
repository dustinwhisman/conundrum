import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { LettersGameComponent } from './letters-game/letters-game.component';
import { NumbersGameComponent } from './numbers-game/numbers-game.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: GameSelectionComponent },
  { path: 'letters-game', component: LettersGameComponent },
  { path: 'numbers-game', component: NumbersGameComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
