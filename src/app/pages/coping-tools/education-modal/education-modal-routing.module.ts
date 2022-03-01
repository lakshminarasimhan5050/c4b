import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationModalPage } from './education-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EducationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationModalPageRoutingModule {}
