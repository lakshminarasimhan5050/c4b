import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerModalPage } from './peer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PeerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerModalPageRoutingModule {}
