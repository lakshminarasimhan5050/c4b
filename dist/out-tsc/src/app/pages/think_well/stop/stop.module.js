import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StopPageRoutingModule } from './stop-routing.module';
import { ComponentsModule } from '../../../components/components.module';
import { StopPage } from './stop.page';
let StopPageModule = class StopPageModule {
};
StopPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            StopPageRoutingModule,
            ComponentsModule
        ],
        declarations: [StopPage]
    })
], StopPageModule);
export { StopPageModule };
//# sourceMappingURL=stop.module.js.map