import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsiderOptionsPage } from './consider-options.page';

const routes: Routes = [
  {
    path: '',
    component: ConsiderOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsiderOptionsPageRoutingModule {}
