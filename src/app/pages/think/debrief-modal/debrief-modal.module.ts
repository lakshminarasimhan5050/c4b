import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebriefModalPageRoutingModule } from './debrief-modal-routing.module';

import { DebriefModalPage } from './debrief-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebriefModalPageRoutingModule
  ],
  declarations: [DebriefModalPage]
})
export class DebriefModalPageModule {}
