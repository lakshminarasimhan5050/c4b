import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightsModalPage } from './sights-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SightsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightsModalPageRoutingModule {}
