import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NutritionPage } from './nutrition.page';
const routes = [
    {
        path: '',
        component: NutritionPage
    }
];
let NutritionPageRoutingModule = class NutritionPageRoutingModule {
};
NutritionPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NutritionPageRoutingModule);
export { NutritionPageRoutingModule };
//# sourceMappingURL=nutrition-routing.module.js.map