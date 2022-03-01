import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveModelPageRoutingModule } from './move-model-routing.module';

import { MoveModelPage } from './move-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveModelPageRoutingModule
  ],
  declarations: [MoveModelPage]
})
export class MoveModelPageModule {}
