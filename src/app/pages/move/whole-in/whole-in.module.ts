import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WholeInPageRoutingModule } from './whole-in-routing.module';

import { WholeInPage } from './whole-in.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WholeInPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WholeInPage]
})
export class WholeInPageModule {}
