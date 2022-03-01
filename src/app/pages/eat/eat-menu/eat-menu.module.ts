import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatMenuPageRoutingModule } from './eat-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { EatMenuPage } from './eat-menu.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatMenuPageRoutingModule,
    ComponentsModule,
  
  ],
  declarations: [EatMenuPage]
})
export class EatMenuPageModule {}
