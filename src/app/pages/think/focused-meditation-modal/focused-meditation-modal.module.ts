import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FocusedMeditationModalPageRoutingModule } from './focused-meditation-modal-routing.module';

import { FocusedMeditationModalPage } from './focused-meditation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FocusedMeditationModalPageRoutingModule
  ],
  declarations: [FocusedMeditationModalPage]
})
export class FocusedMeditationModalPageModule {}
