import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopModalPageRoutingModule } from './cop-modal-routing.module';

import { CopModalPage } from './cop-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopModalPageRoutingModule
  ],
  declarations: [CopModalPage]
})
export class CopModalPageModule {}
