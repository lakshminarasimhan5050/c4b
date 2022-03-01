import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepStoriesPage } from './sleep-stories.page';

const routes: Routes = [
  {
    path: '',
    component: SleepStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepStoriesPageRoutingModule {}
