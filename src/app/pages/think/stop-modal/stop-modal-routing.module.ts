import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopModalPage } from './stop-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StopModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopModalPageRoutingModule {}
