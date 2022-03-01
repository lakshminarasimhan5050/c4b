import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayHealthTipsPageRoutingModule } from './day-health-tips-routing.module';

import { DayHealthTipsPage } from './day-health-tips.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayHealthTipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DayHealthTipsPage]
})
export class DayHealthTipsPageModule {}
