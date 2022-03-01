import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectWithIntentionPageRoutingModule } from './select-with-intention-routing.module';
import { SelectWithIntentionPage } from './select-with-intention.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectWithIntentionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectWithIntentionPage]
})
export class SelectWithIntentionPageModule {}
