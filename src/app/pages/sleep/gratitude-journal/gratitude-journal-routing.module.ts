import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GratitudeJournalPage } from './gratitude-journal.page';

const routes: Routes = [
  {
    path: '',
    component: GratitudeJournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GratitudeJournalPageRoutingModule {}
