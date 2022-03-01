import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KnowYourIntentionPageRoutingModule } from './know-your-intention-routing.module';
import { KnowYourIntentionPage } from './know-your-intention.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowYourIntentionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KnowYourIntentionPage]
})
export class KnowYourIntentionPageModule {}
