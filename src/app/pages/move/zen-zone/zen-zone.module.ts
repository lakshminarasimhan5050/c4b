import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZenZonePageRoutingModule } from './zen-zone-routing.module';

import { ZenZonePage } from './zen-zone.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZenZonePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ZenZonePage]
})
export class ZenZonePageModule {}
