import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectPage } from './select.page';
const routes = [
    {
        path: '',
        component: SelectPage
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SelectPageRoutingModule);
export { SelectPageRoutingModule };
//# sourceMappingURL=select-routing.module.js.map