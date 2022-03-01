import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepModalPageRoutingModule } from './sleep-modal-routing.module';

import { SleepModalPage } from './sleep-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepModalPageRoutingModule
  ],
  declarations: [SleepModalPage]
})
export class SleepModalPageModule {}
