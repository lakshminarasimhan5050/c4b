import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThinkModelPageRoutingModule } from './think-model-routing.module';

import { ThinkModelPage } from './think-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThinkModelPageRoutingModule
  ],
  declarations: [ThinkModelPage]
})
export class ThinkModelPageModule {}
