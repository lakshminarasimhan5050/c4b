import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsPageRoutingModule } from './whats-routing.module';

import { WhatsPage } from './whats.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WhatsPage]
})
export class WhatsPageModule {}
