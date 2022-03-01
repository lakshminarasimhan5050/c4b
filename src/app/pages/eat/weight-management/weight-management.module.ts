import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightManagementPageRoutingModule } from './weight-management-routing.module';

import { WeightManagementPage } from './weight-management.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightManagementPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeightManagementPage]
})
export class WeightManagementPageModule {}
