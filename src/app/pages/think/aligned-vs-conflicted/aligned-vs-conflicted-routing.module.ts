import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlignedVsConflictedPage } from './aligned-vs-conflicted.page';

const routes: Routes = [
  {
    path: '',
    component: AlignedVsConflictedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlignedVsConflictedPageRoutingModule {}
