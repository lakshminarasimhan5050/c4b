import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BalancedPlatePageRoutingModule } from './balanced-plate-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { BalancedPlatePage } from './balanced-plate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancedPlatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BalancedPlatePage]
})
export class BalancedPlatePageModule {}
