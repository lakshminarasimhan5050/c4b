import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourModalPage } from './your-modal.page';

const routes: Routes = [
  {
    path: '',
    component: YourModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourModalPageRoutingModule {}
