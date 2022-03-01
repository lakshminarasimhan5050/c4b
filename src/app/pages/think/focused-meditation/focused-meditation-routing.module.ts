import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FocusedMeditationPage } from './focused-meditation.page';

const routes: Routes = [
  {
    path: '',
    component: FocusedMeditationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FocusedMeditationPageRoutingModule {}
