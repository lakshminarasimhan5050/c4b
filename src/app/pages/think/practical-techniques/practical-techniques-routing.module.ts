import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticalTechniquesPage } from './practical-techniques.page';

const routes: Routes = [
  {
    path: '',
    component: PracticalTechniquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticalTechniquesPageRoutingModule {}
