import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EffortPageRoutingModule } from './effort-routing.module';

import { EffortPage } from './effort.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffortPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EffortPage]
})
export class EffortPageModule {}
