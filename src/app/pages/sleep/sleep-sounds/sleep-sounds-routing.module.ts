import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepSoundsPage } from './sleep-sounds.page';

const routes: Routes = [
  {
    path: '',
    component: SleepSoundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepSoundsPageRoutingModule {}
