import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurstoryModalPage } from './ourstory-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OurstoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurstoryModalPageRoutingModule {}
