import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessCoachPage } from './fitness-coach.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessCoachPageRoutingModule {}
