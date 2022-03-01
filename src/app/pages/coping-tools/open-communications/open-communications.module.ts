import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenCommunicationsPageRoutingModule } from './open-communications-routing.module';

import { OpenCommunicationsPage } from './open-communications.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenCommunicationsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OpenCommunicationsPage]
})
export class OpenCommunicationsPageModule {}
