import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectMenuPage } from './connect-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectMenuPageRoutingModule {}
