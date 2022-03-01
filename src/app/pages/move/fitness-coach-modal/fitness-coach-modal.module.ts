import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessCoachModalPageRoutingModule } from './fitness-coach-modal-routing.module';

import { FitnessCoachModalPage } from './fitness-coach-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessCoachModalPageRoutingModule
  ],
  declarations: [FitnessCoachModalPage]
})
export class FitnessCoachModalPageModule {}
