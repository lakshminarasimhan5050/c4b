import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticMeditationsDetailsPage } from './analytic-meditations-details.page';
const routes = [
    {
        path: '',
        component: AnalyticMeditationsDetailsPage
    }
];
let AnalyticMeditationsDetailsPageRoutingModule = class AnalyticMeditationsDetailsPageRoutingModule {
};
AnalyticMeditationsDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AnalyticMeditationsDetailsPageRoutingModule);
export { AnalyticMeditationsDetailsPageRoutingModule };
//# sourceMappingURL=analytic-meditations-details-routing.module.js.map