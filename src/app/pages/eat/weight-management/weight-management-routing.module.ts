import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightManagementPage } from './weight-management.page';

const routes: Routes = [
  {
    path: '',
    component: WeightManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightManagementPageRoutingModule {}
