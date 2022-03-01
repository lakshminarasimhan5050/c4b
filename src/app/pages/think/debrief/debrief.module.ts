import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DebriefPageRoutingModule } from './debrief-routing.module';
import { DebriefPage } from './debrief.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebriefPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DebriefPage]
})
export class DebriefPageModule {}
