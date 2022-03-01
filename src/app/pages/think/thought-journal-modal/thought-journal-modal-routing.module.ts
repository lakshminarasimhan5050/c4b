import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtJournalModalPage } from './thought-journal-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ThoughtJournalModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThoughtJournalModalPageRoutingModule {}
