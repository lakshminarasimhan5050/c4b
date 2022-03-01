import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AffirmationsDetailsPage } from './affirmations-details.page';
const routes = [
    {
        path: '',
        component: AffirmationsDetailsPage
    }
];
let AffirmationsDetailsPageRoutingModule = class AffirmationsDetailsPageRoutingModule {
};
AffirmationsDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AffirmationsDetailsPageRoutingModule);
export { AffirmationsDetailsPageRoutingModule };
//# sourceMappingURL=affirmations-details-routing.module.js.map