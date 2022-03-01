import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StopPage } from './stop.page';
const routes = [
    {
        path: '',
        component: StopPage
    }
];
let StopPageRoutingModule = class StopPageRoutingModule {
};
StopPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], StopPageRoutingModule);
export { StopPageRoutingModule };
//# sourceMappingURL=stop-routing.module.js.map