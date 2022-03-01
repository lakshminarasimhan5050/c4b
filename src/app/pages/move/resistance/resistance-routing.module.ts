import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResistancePage } from './resistance.page';

const routes: Routes = [
  {
    path: '',
    component: ResistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResistancePageRoutingModule {}
