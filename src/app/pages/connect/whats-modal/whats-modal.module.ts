import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsModalPageRoutingModule } from './whats-modal-routing.module';

import { WhatsModalPage } from './whats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsModalPageRoutingModule
  ],
  declarations: [WhatsModalPage]
})
export class WhatsModalPageModule {}
