import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightManagementModalPage } from './weight-management-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WeightManagementModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightManagementModalPageRoutingModule {}
