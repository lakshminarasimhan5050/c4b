import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepLogsPageRoutingModule } from './sleep-logs-routing.module';

import { SleepLogsPage } from './sleep-logs.page';
import { ComponentsModule} from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepLogsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepLogsPage]
})
export class SleepLogsPageModule {}
