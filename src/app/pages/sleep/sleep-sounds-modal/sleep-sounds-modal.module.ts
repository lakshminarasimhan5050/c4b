import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepSoundsModalPageRoutingModule } from './sleep-sounds-modal-routing.module';

import { SleepSoundsModalPage } from './sleep-sounds-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepSoundsModalPageRoutingModule
  ],
  declarations: [SleepSoundsModalPage]
})
export class SleepSoundsModalPageModule {}
