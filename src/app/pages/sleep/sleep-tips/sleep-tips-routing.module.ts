import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepTipsPage } from './sleep-tips.page';

const routes: Routes = [
  {
    path: '',
    component: SleepTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepTipsPageRoutingModule {}
