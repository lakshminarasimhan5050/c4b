import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfTalkPage } from './self-talk.page';

const routes: Routes = [
  {
    path: '',
    component: SelfTalkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfTalkPageRoutingModule {}
