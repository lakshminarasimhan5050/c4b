import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZenZoneModalPageRoutingModule } from './zen-zone-modal-routing.module';

import { ZenZoneModalPage } from './zen-zone-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZenZoneModalPageRoutingModule
  ],
  declarations: [ZenZoneModalPage]
})
export class ZenZoneModalPageModule {}
