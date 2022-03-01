import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayBioHacksPageRoutingModule } from './day-bio-hacks-routing.module';

import { DayBioHacksPage } from './day-bio-hacks.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayBioHacksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DayBioHacksPage]
})
export class DayBioHacksPageModule {}
