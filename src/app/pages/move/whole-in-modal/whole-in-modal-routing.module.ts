import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholeInModalPage } from './whole-in-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WholeInModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholeInModalPageRoutingModule {}
