import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownTimePage } from './down-time.page';

const routes: Routes = [
  {
    path: '',
    component: DownTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownTimePageRoutingModule {}
