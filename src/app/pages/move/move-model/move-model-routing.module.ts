import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveModelPage } from './move-model.page';

const routes: Routes = [
  {
    path: '',
    component: MoveModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveModelPageRoutingModule {}
