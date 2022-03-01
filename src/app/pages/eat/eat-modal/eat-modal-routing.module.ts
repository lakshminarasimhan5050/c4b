import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatModalPage } from './eat-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EatModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatModalPageRoutingModule {}
