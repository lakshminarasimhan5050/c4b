import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagingChangePage } from './managing-change.page';

const routes: Routes = [
  {
    path: '',
    component: ManagingChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagingChangePageRoutingModule {}
