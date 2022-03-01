import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepStoriesPageRoutingModule } from './sleep-stories-routing.module';

import { SleepStoriesPage } from './sleep-stories.page';
import { ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepStoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepStoriesPage]
})
export class SleepStoriesPageModule {}
