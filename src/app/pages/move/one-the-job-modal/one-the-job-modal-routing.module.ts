import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneTheJobModalPage } from './one-the-job-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OneTheJobModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneTheJobModalPageRoutingModule {}
