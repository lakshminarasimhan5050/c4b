import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepMeditationModalPage } from './sleep-meditation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SleepMeditationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepMeditationModalPageRoutingModule {}
