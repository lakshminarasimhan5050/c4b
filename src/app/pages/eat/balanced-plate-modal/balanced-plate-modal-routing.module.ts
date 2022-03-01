import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancedPlateModalPage } from './balanced-plate-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BalancedPlateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancedPlateModalPageRoutingModule {}
