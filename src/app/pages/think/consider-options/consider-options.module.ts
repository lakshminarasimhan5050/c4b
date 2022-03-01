import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsiderOptionsPageRoutingModule } from './consider-options-routing.module';
import { ConsiderOptionsPage } from './consider-options.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsiderOptionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsiderOptionsPage]
})
export class ConsiderOptionsPageModule {}
