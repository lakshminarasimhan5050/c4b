import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunnyModalPageRoutingModule } from './funny-modal-routing.module';

import { FunnyModalPage } from './funny-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunnyModalPageRoutingModule
  ],
  declarations: [FunnyModalPage]
})
export class FunnyModalPageModule {}
