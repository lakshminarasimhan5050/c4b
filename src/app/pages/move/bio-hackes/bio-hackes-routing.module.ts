import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioHackesPage } from './bio-hackes.page';

const routes: Routes = [
  {
    path: '',
    component: BioHackesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioHackesPageRoutingModule {}
