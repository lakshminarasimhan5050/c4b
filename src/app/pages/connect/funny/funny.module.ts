import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunnyPageRoutingModule } from './funny-routing.module';

import { FunnyPage } from './funny.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunnyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FunnyPage]
})
export class FunnyPageModule {}
