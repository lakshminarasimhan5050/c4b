import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiitPageRoutingModule } from './hiit-routing.module';
import { ComponentsModule} from '../../../components/components.module';

import { HiitPage } from './hiit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HiitPage]
})
export class HiitPageModule {}
