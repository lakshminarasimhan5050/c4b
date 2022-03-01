import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hydration101PageRoutingModule } from './hydration101-routing.module';

import { Hydration101Page } from './hydration101.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hydration101PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Hydration101Page]
})
export class Hydration101PageModule {}
