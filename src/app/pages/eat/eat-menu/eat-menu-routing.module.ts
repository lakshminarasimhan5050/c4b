import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatMenuPage } from './eat-menu.page';

const routes: Routes = [
  {
    path: '',
    component: EatMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatMenuPageRoutingModule {}
