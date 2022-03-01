import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenCommunicationsPage } from './open-communications.page';

const routes: Routes = [
  {
    path: '',
    component: OpenCommunicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenCommunicationsPageRoutingModule {}
