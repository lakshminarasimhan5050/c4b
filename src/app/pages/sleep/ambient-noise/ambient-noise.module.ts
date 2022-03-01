import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbientNoisePageRoutingModule } from './ambient-noise-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { AmbientNoisePage } from './ambient-noise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbientNoisePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AmbientNoisePage]
})
export class AmbientNoisePageModule {}
