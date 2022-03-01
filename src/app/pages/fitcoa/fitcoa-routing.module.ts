import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitcoaPage } from './fitcoa.page';

const routes: Routes = [
  {
    path: '',
    component: FitcoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitcoaPageRoutingModule {}
