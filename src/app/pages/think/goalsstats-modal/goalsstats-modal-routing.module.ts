import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsstatsModalPage } from './goalsstats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsstatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsstatsModalPageRoutingModule {}
