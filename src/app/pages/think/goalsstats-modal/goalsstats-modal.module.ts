import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsstatsModalPageRoutingModule } from './goalsstats-modal-routing.module';

import { GoalsstatsModalPage } from './goalsstats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsstatsModalPageRoutingModule
  ],
  declarations: [GoalsstatsModalPage]
})
export class GoalsstatsModalPageModule {}
