import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule} from '../../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { ResistancePageRoutingModule } from './resistance-routing.module';

import { ResistancePage } from './resistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResistancePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResistancePage]
})
export class ResistancePageModule {}
