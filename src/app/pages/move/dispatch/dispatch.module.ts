import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispatchPageRoutingModule } from './dispatch-routing.module';

import { DispatchPage } from './dispatch.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispatchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DispatchPage]
})
export class DispatchPageModule {}
