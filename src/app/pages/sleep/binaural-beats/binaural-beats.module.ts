import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinauralBeatsPageRoutingModule } from './binaural-beats-routing.module';

import { BinauralBeatsPage } from './binaural-beats.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinauralBeatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BinauralBeatsPage]
})
export class BinauralBeatsPageModule {}
