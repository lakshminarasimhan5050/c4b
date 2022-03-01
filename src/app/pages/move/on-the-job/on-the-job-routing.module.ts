import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnTheJobPage } from './on-the-job.page';

const routes: Routes = [
  {
    path: '',
    component: OnTheJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnTheJobPageRoutingModule {}
