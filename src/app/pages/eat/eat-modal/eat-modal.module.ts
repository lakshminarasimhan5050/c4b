import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatModalPageRoutingModule } from './eat-modal-routing.module';

import { EatModalPage } from './eat-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatModalPageRoutingModule
  ],
  declarations: [EatModalPage]
})
export class EatModalPageModule {}
