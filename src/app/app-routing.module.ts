import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { LettersGameComponent } from './letters-game/letters-game.component';

const routes: Routes = [
  { path: '', component: GameSelectionComponent },
  { path: 'letters-game', component: LettersGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
