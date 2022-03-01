import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyRecoveryPageRoutingModule } from './body-recovery-routing.module';

import { BodyRecoveryPage } from './body-recovery.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyRecoveryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BodyRecoveryPage]
})
export class BodyRecoveryPageModule {}
