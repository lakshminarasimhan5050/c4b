import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetMindsetPage } from './reset-mindset.page';

const routes: Routes = [
  {
    path: '',
    component: ResetMindsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetMindsetPageRoutingModule {}
