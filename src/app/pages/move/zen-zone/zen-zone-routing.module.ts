import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZenZonePage } from './zen-zone.page';

const routes: Routes = [
  {
    path: '',
    component: ZenZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZenZonePageRoutingModule {}
