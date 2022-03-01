import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurstoryPageRoutingModule } from './ourstory-routing.module';

import { OurstoryPage } from './ourstory.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurstoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OurstoryPage]
})
export class OurstoryPageModule {}
