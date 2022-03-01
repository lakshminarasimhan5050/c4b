import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoutPage } from './logout.page';
const routes = [
    {
        path: '',
        component: LogoutPage
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LogoutPageRoutingModule);
export { LogoutPageRoutingModule };
//# sourceMappingURL=logout-routing.module.js.map