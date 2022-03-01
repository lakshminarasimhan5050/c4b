import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BioHackesPageRoutingModule } from './bio-hackes-routing.module';
import { BioHackesPage } from './bio-hackes.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioHackesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BioHackesPage]
})
export class BioHackesPageModule {}
