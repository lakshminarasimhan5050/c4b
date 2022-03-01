import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NutritionPageRoutingModule } from './nutrition-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { NutritionPage } from './nutrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NutritionPage]
})
export class NutritionPageModule {}
