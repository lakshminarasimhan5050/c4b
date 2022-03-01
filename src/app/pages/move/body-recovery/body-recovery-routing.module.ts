import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyRecoveryPage } from './body-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: BodyRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRecoveryPageRoutingModule {}
