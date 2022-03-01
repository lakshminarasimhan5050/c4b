import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WholeInModalPageRoutingModule } from './whole-in-modal-routing.module';

import { WholeInModalPage } from './whole-in-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WholeInModalPageRoutingModule
  ],
  declarations: [WholeInModalPage]
})
export class WholeInModalPageModule {}
