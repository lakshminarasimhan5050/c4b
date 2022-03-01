import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BalancedPlatePageRoutingModule } from './balanced-plate-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { BalancedPlatePage } from './balanced-plate.page';
let BalancedPlatePageModule = class BalancedPlatePageModule {
};
BalancedPlatePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BalancedPlatePageRoutingModule,
            ComponentsModule
        ],
        declarations: [BalancedPlatePage]
    })
], BalancedPlatePageModule);
export { BalancedPlatePageModule };
//# sourceMappingURL=balanced-plate.module.js.map