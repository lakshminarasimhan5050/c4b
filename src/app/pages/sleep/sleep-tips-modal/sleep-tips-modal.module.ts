import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepTipsModalPageRoutingModule } from './sleep-tips-modal-routing.module';

import { SleepTipsModalPage } from './sleep-tips-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepTipsModalPageRoutingModule
  ],
  declarations: [SleepTipsModalPage]
})
export class SleepTipsModalPageModule {}
