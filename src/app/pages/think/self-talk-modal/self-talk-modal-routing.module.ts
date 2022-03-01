import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfTalkModalPage } from './self-talk-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SelfTalkModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfTalkModalPageRoutingModule {}
