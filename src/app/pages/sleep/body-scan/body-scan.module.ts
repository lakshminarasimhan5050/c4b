import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyScanPageRoutingModule } from './body-scan-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { BodyScanPage } from './body-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyScanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BodyScanPage]
})
export class BodyScanPageModule {}
