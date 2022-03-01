import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectModalPage } from './connect-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectModalPageRoutingModule {}
