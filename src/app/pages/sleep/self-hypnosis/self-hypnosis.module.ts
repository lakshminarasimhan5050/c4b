import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfHypnosisPageRoutingModule } from './self-hypnosis-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { SelfHypnosisPage } from './self-hypnosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfHypnosisPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelfHypnosisPage]
})
export class SelfHypnosisPageModule {}
