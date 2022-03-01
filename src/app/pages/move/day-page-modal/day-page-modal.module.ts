import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayPageModalPageRoutingModule } from './day-page-modal-routing.module';

import { DayPageModalPage } from './day-page-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageModalPageRoutingModule
  ],
  declarations: [DayPageModalPage]
})
export class DayPageModalPageModule {}
