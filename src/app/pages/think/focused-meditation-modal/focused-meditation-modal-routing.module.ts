import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FocusedMeditationModalPage } from './focused-meditation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FocusedMeditationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FocusedMeditationModalPageRoutingModule {}
