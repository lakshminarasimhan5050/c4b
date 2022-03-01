import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetMindsetModalPage } from './reset-mindset-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResetMindsetModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetMindsetModalPageRoutingModule {}
