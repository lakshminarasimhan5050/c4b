import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnTheJobPageRoutingModule } from './on-the-job-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { OnTheJobPage } from './on-the-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnTheJobPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OnTheJobPage]
})
export class OnTheJobPageModule {}
