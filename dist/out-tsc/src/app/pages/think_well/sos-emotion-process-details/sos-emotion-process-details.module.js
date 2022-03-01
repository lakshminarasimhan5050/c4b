import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SosEmotionProcessDetailsPageRoutingModule } from './sos-emotion-process-details-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { SosEmotionProcessDetailsPage } from './sos-emotion-process-details.page';
let SosEmotionProcessDetailsPageModule = class SosEmotionProcessDetailsPageModule {
};
SosEmotionProcessDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            SosEmotionProcessDetailsPageRoutingModule
        ],
        declarations: [SosEmotionProcessDetailsPage]
    })
], SosEmotionProcessDetailsPageModule);
export { SosEmotionProcessDetailsPageModule };
//# sourceMappingURL=sos-emotion-process-details.module.js.map