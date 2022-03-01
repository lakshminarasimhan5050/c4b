import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourStatsModalPage } from './your-stats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: YourStatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourStatsModalPageRoutingModule {}
