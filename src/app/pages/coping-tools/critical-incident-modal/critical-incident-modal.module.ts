import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriticalIncidentModalPageRoutingModule } from './critical-incident-modal-routing.module';

import { CriticalIncidentModalPage } from './critical-incident-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriticalIncidentModalPageRoutingModule
  ],
  declarations: [CriticalIncidentModalPage]
})
export class CriticalIncidentModalPageModule {}
