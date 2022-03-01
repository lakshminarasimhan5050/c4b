import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule} from '../../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { RhythmPageRoutingModule } from './rhythm-routing.module';

import { RhythmPage } from './rhythm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RhythmPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RhythmPage]
})
export class RhythmPageModule {}
