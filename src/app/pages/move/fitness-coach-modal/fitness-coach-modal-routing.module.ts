import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessCoachModalPage } from './fitness-coach-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessCoachModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessCoachModalPageRoutingModule {}
