import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerModalPageRoutingModule } from './peer-modal-routing.module';

import { PeerModalPage } from './peer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerModalPageRoutingModule
  ],
  declarations: [PeerModalPage]
})
export class PeerModalPageModule {}
