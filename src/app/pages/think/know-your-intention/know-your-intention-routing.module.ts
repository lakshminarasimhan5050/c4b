import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowYourIntentionPage } from './know-your-intention.page';

const routes: Routes = [
  {
    path: '',
    component: KnowYourIntentionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowYourIntentionPageRoutingModule {}
