import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsstatsPageRoutingModule } from './goalsstats-routing.module';

import { GoalsstatsPage } from './goalsstats.page';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    GoalsstatsPageRoutingModule
  ],
  declarations: [GoalsstatsPage]
})
export class GoalsstatsPageModule {}
