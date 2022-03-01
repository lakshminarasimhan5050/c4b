import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JournalingDetailsPage } from './journaling-details.page';
const routes = [
    {
        path: '',
        component: JournalingDetailsPage
    }
];
let JournalingDetailsPageRoutingModule = class JournalingDetailsPageRoutingModule {
};
JournalingDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], JournalingDetailsPageRoutingModule);
export { JournalingDetailsPageRoutingModule };
//# sourceMappingURL=journaling-details-routing.module.js.map