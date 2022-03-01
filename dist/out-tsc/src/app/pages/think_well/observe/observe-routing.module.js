import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ObservePage } from './observe.page';
const routes = [
    {
        path: '',
        component: ObservePage
    }
];
let ObservePageRoutingModule = class ObservePageRoutingModule {
};
ObservePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ObservePageRoutingModule);
export { ObservePageRoutingModule };
//# sourceMappingURL=observe-routing.module.js.map