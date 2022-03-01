import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopingMenuPageRoutingModule } from './coping-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { CopingMenuPage } from './coping-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopingMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CopingMenuPage]
})
export class CopingMenuPageModule {}
