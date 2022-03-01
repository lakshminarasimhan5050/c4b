import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingMenuPage } from './coping-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CopingMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopingMenuPageRoutingModule {}
