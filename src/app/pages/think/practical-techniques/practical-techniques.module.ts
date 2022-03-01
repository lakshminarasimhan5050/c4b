import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticalTechniquesPageRoutingModule } from './practical-techniques-routing.module';

import { PracticalTechniquesPage } from './practical-techniques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticalTechniquesPageRoutingModule
  ],
  declarations: [PracticalTechniquesPage]
})
export class PracticalTechniquesPageModule {}
