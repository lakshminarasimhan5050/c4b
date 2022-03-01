import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservePageRoutingModule } from './observe-routing.module';

import { ObservePage } from './observe.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ObservePage]
})
export class ObservePageModule {}
