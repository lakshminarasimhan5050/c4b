import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionPage } from './nutrition.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionPageRoutingModule {}
