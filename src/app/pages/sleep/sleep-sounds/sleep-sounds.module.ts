import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepSoundsPageRoutingModule } from './sleep-sounds-routing.module';

import { SleepSoundsPage } from './sleep-sounds.page';
import { ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepSoundsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepSoundsPage]
})
export class SleepSoundsPageModule {}
