import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Your1ModalPage } from './your1-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Your1ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Your1ModalPageRoutingModule {}
