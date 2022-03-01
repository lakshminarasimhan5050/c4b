import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepTipsModalPage } from './sleep-tips-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SleepTipsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepTipsModalPageRoutingModule {}
