import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepMeditationModalPageRoutingModule } from './sleep-meditation-modal-routing.module';

import { SleepMeditationModalPage } from './sleep-meditation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepMeditationModalPageRoutingModule
  ],
  declarations: [SleepMeditationModalPage]
})
export class SleepMeditationModalPageModule {}
