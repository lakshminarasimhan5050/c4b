import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurstoryModalPageRoutingModule } from './ourstory-modal-routing.module';

import { OurstoryModalPage } from './ourstory-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurstoryModalPageRoutingModule
  ],
  declarations: [OurstoryModalPage]
})
export class OurstoryModalPageModule {}
