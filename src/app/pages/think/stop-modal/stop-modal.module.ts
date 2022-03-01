import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopModalPageRoutingModule } from './stop-modal-routing.module';

import { StopModalPage } from './stop-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopModalPageRoutingModule
  ],
  declarations: [StopModalPage]
})
export class StopModalPageModule {}
