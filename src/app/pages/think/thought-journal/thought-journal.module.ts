import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThoughtJournalPageRoutingModule } from './thought-journal-routing.module';
import { ThoughtJournalPage } from './thought-journal.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThoughtJournalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ThoughtJournalPage]
})
export class ThoughtJournalPageModule {}
