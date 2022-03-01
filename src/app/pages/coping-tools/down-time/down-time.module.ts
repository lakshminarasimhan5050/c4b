import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownTimePageRoutingModule } from './down-time-routing.module';

import { DownTimePage } from './down-time.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownTimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DownTimePage]
})
export class DownTimePageModule {}
