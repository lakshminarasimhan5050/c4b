import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComeDownPageRoutingModule } from './come-down-routing.module';

import { ComeDownPage } from './come-down.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComeDownPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComeDownPage]
})
export class ComeDownPageModule {}
