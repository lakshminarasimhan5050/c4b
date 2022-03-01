import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepMenuPage } from './sleep-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SleepMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepMenuPageRoutingModule {}
