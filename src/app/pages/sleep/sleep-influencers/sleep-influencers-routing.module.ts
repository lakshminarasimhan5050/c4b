import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepInfluencersPage } from './sleep-influencers.page';

const routes: Routes = [
  {
    path: '',
    component: SleepInfluencersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepInfluencersPageRoutingModule {}
