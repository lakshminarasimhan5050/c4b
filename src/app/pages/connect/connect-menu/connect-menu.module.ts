import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectMenuPageRoutingModule } from './connect-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { ConnectMenuPage } from './connect-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConnectMenuPage]
})
export class ConnectMenuPageModule {}
