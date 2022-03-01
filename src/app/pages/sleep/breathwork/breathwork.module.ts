import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathworkPageRoutingModule } from './breathwork-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { BreathworkPage } from './breathwork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathworkPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreathworkPage]
})
export class BreathworkPageModule {}
