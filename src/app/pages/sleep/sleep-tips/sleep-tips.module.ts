import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepTipsPageRoutingModule } from './sleep-tips-routing.module';

import { SleepTipsPage } from './sleep-tips.page';
import { ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepTipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepTipsPage]
})
export class SleepTipsPageModule {}
