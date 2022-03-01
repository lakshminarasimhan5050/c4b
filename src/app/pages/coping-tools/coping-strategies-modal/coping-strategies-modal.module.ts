import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopingStrategiesModalPageRoutingModule } from './coping-strategies-modal-routing.module';

import { CopingStrategiesModalPage } from './coping-strategies-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopingStrategiesModalPageRoutingModule
  ],
  declarations: [CopingStrategiesModalPage]
})
export class CopingStrategiesModalPageModule {}
