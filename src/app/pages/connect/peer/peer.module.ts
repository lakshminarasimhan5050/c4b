import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerPageRoutingModule } from './peer-routing.module';

import { PeerPage } from './peer.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PeerPage]
})
export class PeerPageModule {}
