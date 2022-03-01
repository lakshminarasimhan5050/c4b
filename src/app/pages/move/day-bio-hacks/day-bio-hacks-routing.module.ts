import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayBioHacksPage } from './day-bio-hacks.page';

const routes: Routes = [
  {
    path: '',
    component: DayBioHacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayBioHacksPageRoutingModule {}
