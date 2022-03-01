import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepModalPage } from './sleep-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SleepModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepModalPageRoutingModule {}
