import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathworkPage } from './breathwork.page';

const routes: Routes = [
  {
    path: '',
    component: BreathworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathworkPageRoutingModule {}
