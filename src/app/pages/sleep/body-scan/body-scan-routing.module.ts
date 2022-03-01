import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyScanPage } from './body-scan.page';

const routes: Routes = [
  {
    path: '',
    component: BodyScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyScanPageRoutingModule {}
