import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveMenuPageRoutingModule } from './move-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { MoveMenuPage } from './move-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MoveMenuPage]
})
export class MoveMenuPageModule {}
