import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopPageRoutingModule } from './cop-routing.module';

import { CopPage } from './cop.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CopPage]
})
export class CopPageModule {}
