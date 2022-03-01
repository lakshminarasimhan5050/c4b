import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitcoaPageRoutingModule } from './fitcoa-routing.module';

import { FitcoaPage } from './fitcoa.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitcoaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [FitcoaPage]
})
export class FitcoaPageModule {}
