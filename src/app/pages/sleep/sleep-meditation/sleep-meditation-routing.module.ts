import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepMeditationPage } from './sleep-meditation.page';

const routes: Routes = [
  {
    path: '',
    component: SleepMeditationPage
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepMeditationPageRoutingModule {}
