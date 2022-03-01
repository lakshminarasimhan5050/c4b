import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScaleTrackerPageRoutingModule } from './scale-tracker-routing.module';

import { ScaleTrackerPage } from './scale-tracker.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScaleTrackerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ScaleTrackerPage]
})
export class ScaleTrackerPageModule {}
