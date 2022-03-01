import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightsModalPageRoutingModule } from './sights-modal-routing.module';

import { SightsModalPage } from './sights-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightsModalPageRoutingModule
  ],
  declarations: [SightsModalPage]
})
export class SightsModalPageModule {}
