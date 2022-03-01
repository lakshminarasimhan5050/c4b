import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyItMattersPage } from './why-it-matters.page';

const routes: Routes = [
  {
    path: '',
    component: WhyItMattersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyItMattersPageRoutingModule {}
