import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffortPage } from './effort.page';

const routes: Routes = [
  {
    path: '',
    component: EffortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffortPageRoutingModule {}
