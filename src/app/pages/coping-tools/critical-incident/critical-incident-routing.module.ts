import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalIncidentPage } from './critical-incident.page';

const routes: Routes = [
  {
    path: '',
    component: CriticalIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriticalIncidentPageRoutingModule {}
