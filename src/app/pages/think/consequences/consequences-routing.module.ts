import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsequencesPage } from './consequences.page';

const routes: Routes = [
  {
    path: '',
    component: ConsequencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsequencesPageRoutingModule {}
