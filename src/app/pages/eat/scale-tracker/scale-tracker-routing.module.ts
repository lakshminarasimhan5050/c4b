import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaleTrackerPage } from './scale-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: ScaleTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScaleTrackerPageRoutingModule {}
