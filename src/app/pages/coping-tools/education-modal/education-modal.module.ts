import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationModalPageRoutingModule } from './education-modal-routing.module';

import { EducationModalPage } from './education-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationModalPageRoutingModule
  ],
  declarations: [EducationModalPage]
})
export class EducationModalPageModule {}
