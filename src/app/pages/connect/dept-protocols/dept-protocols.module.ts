import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeptProtocolsPageRoutingModule } from './dept-protocols-routing.module';

import { DeptProtocolsPage } from './dept-protocols.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeptProtocolsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeptProtocolsPage]
})
export class DeptProtocolsPageModule {}
