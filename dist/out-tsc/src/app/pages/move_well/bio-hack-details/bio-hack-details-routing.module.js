import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BioHackDetailsPage } from './bio-hack-details.page';
const routes = [
    {
        path: '',
        component: BioHackDetailsPage
    }
];
let BioHackDetailsPageRoutingModule = class BioHackDetailsPageRoutingModule {
};
BioHackDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BioHackDetailsPageRoutingModule);
export { BioHackDetailsPageRoutingModule };
//# sourceMappingURL=bio-hack-details-routing.module.js.map