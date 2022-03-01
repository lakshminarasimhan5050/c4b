import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hydration101ModalPageRoutingModule } from './hydration101-modal-routing.module';

import { Hydration101ModalPage } from './hydration101-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hydration101ModalPageRoutingModule
  ],
  declarations: [Hydration101ModalPage]
})
export class Hydration101ModalPageModule {}
