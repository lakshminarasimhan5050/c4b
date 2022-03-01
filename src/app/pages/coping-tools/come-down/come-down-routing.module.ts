import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComeDownPage } from './come-down.page';

const routes: Routes = [
  {
    path: '',
    component: ComeDownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComeDownPageRoutingModule {}
