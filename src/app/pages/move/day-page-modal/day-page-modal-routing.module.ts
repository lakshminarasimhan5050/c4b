import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayPageModalPage } from './day-page-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DayPageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayPageModalPageRoutingModule {}
