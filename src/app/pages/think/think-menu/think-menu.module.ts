import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThinkMenuPageRoutingModule } from './think-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { ThinkMenuPage } from './think-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThinkMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ThinkMenuPage]
})
export class ThinkMenuPageModule {}
