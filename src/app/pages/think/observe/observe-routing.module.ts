import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservePage } from './observe.page';

const routes: Routes = [
  {
    path: '',
    component: ObservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservePageRoutingModule {}
