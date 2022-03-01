import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AffirmationsDetailsPageRoutingModule } from './affirmations-details-routing.module';
import { AffirmationsDetailsPage } from './affirmations-details.page';
let AffirmationsDetailsPageModule = class AffirmationsDetailsPageModule {
};
AffirmationsDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AffirmationsDetailsPageRoutingModule
        ],
        declarations: [AffirmationsDetailsPage]
    })
], AffirmationsDetailsPageModule);
export { AffirmationsDetailsPageModule };
//# sourceMappingURL=affirmations-details.module.js.map