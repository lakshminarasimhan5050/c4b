import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholeInPage } from './whole-in.page';

const routes: Routes = [
  {
    path: '',
    component: WholeInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholeInPageRoutingModule {}
