import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepInfluencersPageRoutingModule } from './sleep-influencers-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { SleepInfluencersPage } from './sleep-influencers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepInfluencersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepInfluencersPage]
})
export class SleepInfluencersPageModule {}
