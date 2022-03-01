import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsPage } from './whats.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsPageRoutingModule {}
