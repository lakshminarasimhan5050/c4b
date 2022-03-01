import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancedPlateModalPageRoutingModule } from './balanced-plate-modal-routing.module';

import { BalancedPlateModalPage } from './balanced-plate-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancedPlateModalPageRoutingModule
  ],
  declarations: [BalancedPlateModalPage]
})
export class BalancedPlateModalPageModule {}
