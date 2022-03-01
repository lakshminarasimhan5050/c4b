import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardioPageRoutingModule } from './cardio-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { CardioPage } from './cardio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardioPage]
})
export class CardioPageModule {}
