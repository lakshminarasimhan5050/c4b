import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePageRoutingModule } from './restore-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { RestorePage } from './restore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RestorePage]
})
export class RestorePageModule {}
