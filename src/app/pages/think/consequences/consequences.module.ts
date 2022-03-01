import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsequencesPageRoutingModule } from './consequences-routing.module';

import { ConsequencesPage } from './consequences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsequencesPageRoutingModule
  ],
  declarations: [ConsequencesPage]
})
export class ConsequencesPageModule {}
