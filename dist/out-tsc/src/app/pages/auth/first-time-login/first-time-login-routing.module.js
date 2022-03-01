import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstTimeLoginPage } from './first-time-login.page';
const routes = [
    {
        path: '',
        component: FirstTimeLoginPage
    }
];
let FirstTimeLoginPageRoutingModule = class FirstTimeLoginPageRoutingModule {
};
FirstTimeLoginPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FirstTimeLoginPageRoutingModule);
export { FirstTimeLoginPageRoutingModule };
//# sourceMappingURL=first-time-login-routing.module.js.map