import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsModalPage } from './whats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsModalPageRoutingModule {}
