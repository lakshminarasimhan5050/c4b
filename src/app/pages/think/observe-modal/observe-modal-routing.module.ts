import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObserveModalPage } from './observe-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ObserveModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObserveModalPageRoutingModule {}
