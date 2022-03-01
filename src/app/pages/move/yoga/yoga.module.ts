import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaPageRoutingModule } from './yoga-routing.module';

import { YogaPage } from './yoga.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [YogaPage]
})
export class YogaPageModule {}
