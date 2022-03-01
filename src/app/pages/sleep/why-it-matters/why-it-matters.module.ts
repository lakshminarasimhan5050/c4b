import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyItMattersPageRoutingModule } from './why-it-matters-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { WhyItMattersPage } from './why-it-matters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhyItMattersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WhyItMattersPage]
})
export class WhyItMattersPageModule {}
