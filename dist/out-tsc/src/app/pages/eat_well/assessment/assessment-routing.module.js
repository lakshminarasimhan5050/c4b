import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssessmentPage } from './assessment.page';
const routes = [
    {
        path: '',
        component: AssessmentPage
    }
];
let AssessmentPageRoutingModule = class AssessmentPageRoutingModule {
};
AssessmentPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AssessmentPageRoutingModule);
export { AssessmentPageRoutingModule };
//# sourceMappingURL=assessment-routing.module.js.map