import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelfTalkPageRoutingModule } from './self-talk-routing.module';
import { SelfTalkPage } from './self-talk.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfTalkPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelfTalkPage]
})
export class SelfTalkPageModule {}
