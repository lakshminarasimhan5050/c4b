import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hydration101ModalPage } from './hydration101-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Hydration101ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hydration101ModalPageRoutingModule {}
