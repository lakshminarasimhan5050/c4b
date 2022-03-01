import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfHypnosisPage } from './self-hypnosis.page';

const routes: Routes = [
  {
    path: '',
    component: SelfHypnosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfHypnosisPageRoutingModule {}
