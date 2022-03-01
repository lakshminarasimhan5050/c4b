import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightManagementModalPageRoutingModule } from './weight-management-modal-routing.module';

import { WeightManagementModalPage } from './weight-management-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightManagementModalPageRoutingModule
  ],
  declarations: [WeightManagementModalPage]
})
export class WeightManagementModalPageModule {}
