import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourStatsPage } from './your-stats.page';

const routes: Routes = [
  {
    path: '',
    component: YourStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourStatsPageRoutingModule {}
