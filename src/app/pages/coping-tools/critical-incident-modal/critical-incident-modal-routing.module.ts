import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticalIncidentModalPage } from './critical-incident-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CriticalIncidentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriticalIncidentModalPageRoutingModule {}
