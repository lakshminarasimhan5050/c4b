import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingModalPage } from './coping-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CopingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopingModalPageRoutingModule {}
