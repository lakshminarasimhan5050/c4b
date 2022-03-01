import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetMindsetModalPageRoutingModule } from './reset-mindset-modal-routing.module';

import { ResetMindsetModalPage } from './reset-mindset-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetMindsetModalPageRoutingModule
  ],
  declarations: [ResetMindsetModalPage]
})
export class ResetMindsetModalPageModule {}
