import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Your1ModalPageRoutingModule } from './your1-modal-routing.module';

import { Your1ModalPage } from './your1-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Your1ModalPageRoutingModule
  ],
  declarations: [Your1ModalPage]
})
export class Your1ModalPageModule {}
