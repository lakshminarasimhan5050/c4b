import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbientNoisePage } from './ambient-noise.page';

const routes: Routes = [
  {
    path: '',
    component: AmbientNoisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbientNoisePageRoutingModule {}
