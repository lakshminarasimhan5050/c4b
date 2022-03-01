import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunnyModalPage } from './funny-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FunnyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunnyModalPageRoutingModule {}
