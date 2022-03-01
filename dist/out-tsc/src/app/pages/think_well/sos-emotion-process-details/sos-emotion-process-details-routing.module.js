import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SosEmotionProcessDetailsPage } from './sos-emotion-process-details.page';
const routes = [
    {
        path: '',
        component: SosEmotionProcessDetailsPage
    }
];
let SosEmotionProcessDetailsPageRoutingModule = class SosEmotionProcessDetailsPageRoutingModule {
};
SosEmotionProcessDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SosEmotionProcessDetailsPageRoutingModule);
export { SosEmotionProcessDetailsPageRoutingModule };
//# sourceMappingURL=sos-emotion-process-details-routing.module.js.map