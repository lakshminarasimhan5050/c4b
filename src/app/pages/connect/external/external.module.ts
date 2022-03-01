import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalPageRoutingModule } from './external-routing.module';

import { ExternalPage } from './external.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ExternalPage]
})
export class ExternalPageModule {}
