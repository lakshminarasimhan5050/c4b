import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectModalPageRoutingModule } from './connect-modal-routing.module';

import { ConnectModalPage } from './connect-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectModalPageRoutingModule
  ],
  declarations: [ConnectModalPage]
})
export class ConnectModalPageModule {}
