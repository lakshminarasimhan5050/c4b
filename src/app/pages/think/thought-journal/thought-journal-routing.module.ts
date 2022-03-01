import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtJournalPage } from './thought-journal.page';

const routes: Routes = [
  {
    path: '',
    component: ThoughtJournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThoughtJournalPageRoutingModule {}
