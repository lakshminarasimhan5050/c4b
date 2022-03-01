import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagingChangeModalPage } from './managing-change-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ManagingChangeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagingChangeModalPageRoutingModule {}
