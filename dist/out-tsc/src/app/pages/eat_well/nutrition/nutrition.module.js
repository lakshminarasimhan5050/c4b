import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NutritionPageRoutingModule } from './nutrition-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { NutritionPage } from './nutrition.page';
let NutritionPageModule = class NutritionPageModule {
};
NutritionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NutritionPageRoutingModule,
            ComponentsModule
        ],
        declarations: [NutritionPage]
    })
], NutritionPageModule);
export { NutritionPageModule };
//# sourceMappingURL=nutrition.module.js.map