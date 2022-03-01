import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfTalkModalPageRoutingModule } from './self-talk-modal-routing.module';

import { SelfTalkModalPage } from './self-talk-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfTalkModalPageRoutingModule
  ],
  declarations: [SelfTalkModalPage]
})
export class SelfTalkModalPageModule {}
