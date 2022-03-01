import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalTeamPage } from './internal-team.page';

const routes: Routes = [
  {
    path: '',
    component: InternalTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalTeamPageRoutingModule {}
