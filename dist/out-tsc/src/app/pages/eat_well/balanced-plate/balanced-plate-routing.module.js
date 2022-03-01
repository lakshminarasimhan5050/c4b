import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BalancedPlatePage } from './balanced-plate.page';
const routes = [
    {
        path: '',
        component: BalancedPlatePage
    }
];
let BalancedPlatePageRoutingModule = class BalancedPlatePageRoutingModule {
};
BalancedPlatePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BalancedPlatePageRoutingModule);
export { BalancedPlatePageRoutingModule };
//# sourceMappingURL=balanced-plate-routing.module.js.map