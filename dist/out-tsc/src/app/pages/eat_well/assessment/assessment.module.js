import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssessmentPageRoutingModule } from './assessment-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { AssessmentPage } from './assessment.page';
let AssessmentPageModule = class AssessmentPageModule {
};
AssessmentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AssessmentPageRoutingModule,
            ComponentsModule
        ],
        declarations: [AssessmentPage]
    })
], AssessmentPageModule);
export { AssessmentPageModule };
//# sourceMappingURL=assessment.module.js.map