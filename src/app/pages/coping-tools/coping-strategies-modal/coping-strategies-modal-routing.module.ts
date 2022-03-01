import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingStrategiesModalPage } from './coping-strategies-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CopingStrategiesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopingStrategiesModalPageRoutingModule {}
