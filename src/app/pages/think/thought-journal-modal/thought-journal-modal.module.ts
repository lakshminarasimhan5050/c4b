import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThoughtJournalModalPageRoutingModule } from './thought-journal-modal-routing.module';

import { ThoughtJournalModalPage } from './thought-journal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThoughtJournalModalPageRoutingModule
  ],
  declarations: [ThoughtJournalModalPage]
})
export class ThoughtJournalModalPageModule {}
