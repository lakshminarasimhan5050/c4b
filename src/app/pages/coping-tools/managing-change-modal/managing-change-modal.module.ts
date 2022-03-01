import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagingChangeModalPageRoutingModule } from './managing-change-modal-routing.module';

import { ManagingChangeModalPage } from './managing-change-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagingChangeModalPageRoutingModule
  ],
  declarations: [ManagingChangeModalPage]
})
export class ManagingChangeModalPageModule {}
