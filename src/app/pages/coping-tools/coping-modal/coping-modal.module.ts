import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopingModalPageRoutingModule } from './coping-modal-routing.module';

import { CopingModalPage } from './coping-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopingModalPageRoutingModule
  ],
  declarations: [CopingModalPage]
})
export class CopingModalPageModule {}
