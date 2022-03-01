import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinauralBeatsPage } from './binaural-beats.page';

const routes: Routes = [
  {
    path: '',
    component: BinauralBeatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinauralBeatsPageRoutingModule {}
