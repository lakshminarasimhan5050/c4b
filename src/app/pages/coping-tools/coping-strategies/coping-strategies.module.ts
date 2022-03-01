import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopingStrategiesPageRoutingModule } from './coping-strategies-routing.module';

import { CopingStrategiesPage } from './coping-strategies.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopingStrategiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CopingStrategiesPage]
})
export class CopingStrategiesPageModule {}
