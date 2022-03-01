import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrengthenPage } from './strengthen.page';

const routes: Routes = [
  {
    path: '',
    component: StrengthenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrengthenPageRoutingModule {}
