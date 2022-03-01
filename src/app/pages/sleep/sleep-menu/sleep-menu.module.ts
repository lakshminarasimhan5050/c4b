import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepMenuPageRoutingModule } from './sleep-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { SleepMenuPage } from './sleep-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepMenuPage]
})
export class SleepMenuPageModule {}
