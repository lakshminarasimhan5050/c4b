import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BioHackDetailsPageRoutingModule } from './bio-hack-details-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { BioHackDetailsPage } from './bio-hack-details.page';
let BioHackDetailsPageModule = class BioHackDetailsPageModule {
};
BioHackDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            BioHackDetailsPageRoutingModule
        ],
        declarations: [BioHackDetailsPage]
    })
], BioHackDetailsPageModule);
export { BioHackDetailsPageModule };
//# sourceMappingURL=bio-hack-details.module.js.map