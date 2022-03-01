import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThinkMenuPage } from './think-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ThinkMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThinkMenuPageRoutingModule {}
