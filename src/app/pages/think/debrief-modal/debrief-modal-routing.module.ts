import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebriefModalPage } from './debrief-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DebriefModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebriefModalPageRoutingModule {}
