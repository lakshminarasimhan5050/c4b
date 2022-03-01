import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessCoachPageRoutingModule } from './fitness-coach-routing.module';

import { FitnessCoachPage } from './fitness-coach.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessCoachPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FitnessCoachPage]
})
export class FitnessCoachPageModule {}
