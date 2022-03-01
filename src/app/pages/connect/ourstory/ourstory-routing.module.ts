import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurstoryPage } from './ourstory.page';

const routes: Routes = [
  {
    path: '',
    component: OurstoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurstoryPageRoutingModule {}
