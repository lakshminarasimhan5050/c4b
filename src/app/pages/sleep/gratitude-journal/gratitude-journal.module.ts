import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GratitudeJournalPageRoutingModule } from './gratitude-journal-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { GratitudeJournalPage } from './gratitude-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GratitudeJournalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GratitudeJournalPage]
})
export class GratitudeJournalPageModule {}
