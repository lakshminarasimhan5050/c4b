import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepSoundsModalPage } from './sleep-sounds-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SleepSoundsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepSoundsModalPageRoutingModule {}
