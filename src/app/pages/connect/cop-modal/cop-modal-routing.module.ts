import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopModalPage } from './cop-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CopModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopModalPageRoutingModule {}
