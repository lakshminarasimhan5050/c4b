import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectModalPageRoutingModule } from './select-modal-routing.module';

import { SelectModalPage } from './select-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectModalPageRoutingModule
  ],
  declarations: [SelectModalPage]
})
export class SelectModalPageModule {}
