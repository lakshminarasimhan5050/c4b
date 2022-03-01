import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourStatsModalPageRoutingModule } from './your-stats-modal-routing.module';

import { YourStatsModalPage } from './your-stats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourStatsModalPageRoutingModule
  ],
  declarations: [YourStatsModalPage]
})
export class YourStatsModalPageModule {}
