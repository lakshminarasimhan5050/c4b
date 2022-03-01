import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThinkModelPage } from './think-model.page';

const routes: Routes = [
  {
    path: '',
    component: ThinkModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThinkModelPageRoutingModule {}
