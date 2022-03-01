import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayHealthTipsPage } from './day-health-tips.page';

const routes: Routes = [
  {
    path: '',
    component: DayHealthTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayHealthTipsPageRoutingModule {}
