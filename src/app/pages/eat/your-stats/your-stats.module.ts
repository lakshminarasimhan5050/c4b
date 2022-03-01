import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourStatsPageRoutingModule } from './your-stats-routing.module';

import { YourStatsPage } from './your-stats.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourStatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [YourStatsPage]
})
export class YourStatsPageModule {}
