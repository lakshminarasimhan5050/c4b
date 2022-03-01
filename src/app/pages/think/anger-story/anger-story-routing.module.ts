import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngerStoryPage } from './anger-story.page';

const routes: Routes = [
  {
    path: '',
    component: AngerStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngerStoryPageRoutingModule {}
