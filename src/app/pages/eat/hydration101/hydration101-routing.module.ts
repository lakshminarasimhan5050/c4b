import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hydration101Page } from './hydration101.page';

const routes: Routes = [
  {
    path: '',
    component: Hydration101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hydration101PageRoutingModule {}
