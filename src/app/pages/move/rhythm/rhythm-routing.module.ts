import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhythmPage } from './rhythm.page';

const routes: Routes = [
  {
    path: '',
    component: RhythmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhythmPageRoutingModule {}
