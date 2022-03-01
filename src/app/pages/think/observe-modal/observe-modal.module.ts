import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObserveModalPageRoutingModule } from './observe-modal-routing.module';

import { ObserveModalPage } from './observe-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObserveModalPageRoutingModule
  ],
  declarations: [ObserveModalPage]
})
export class ObserveModalPageModule {}
