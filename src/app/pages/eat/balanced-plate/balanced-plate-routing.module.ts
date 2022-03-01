import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancedPlatePage } from './balanced-plate.page';

const routes: Routes = [
  {
    path: '',
    component: BalancedPlatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancedPlatePageRoutingModule {}
