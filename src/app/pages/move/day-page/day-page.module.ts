import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayPagePageRoutingModule } from './day-page-routing.module';

import { DayPagePage } from './day-page.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DayPagePage]
})
export class DayPagePageModule {}
