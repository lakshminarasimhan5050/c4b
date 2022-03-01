import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeptProtocolsPage } from './dept-protocols.page';

const routes: Routes = [
  {
    path: '',
    component: DeptProtocolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeptProtocolsPageRoutingModule {}
