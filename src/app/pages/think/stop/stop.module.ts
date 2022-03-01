import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StopPageRoutingModule } from './stop-routing.module';
import { ComponentsModule } from '../../../components/components.module';

import { StopPage } from './stop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StopPage]
})
export class StopPageModule {}
