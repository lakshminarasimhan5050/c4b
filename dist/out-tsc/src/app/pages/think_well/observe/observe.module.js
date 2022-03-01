import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ObservePageRoutingModule } from './observe-routing.module';
import { ObservePage } from './observe.page';
import { ComponentsModule } from '../../../components/components.module';
let ObservePageModule = class ObservePageModule {
};
ObservePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ObservePageRoutingModule,
            ComponentsModule
        ],
        declarations: [ObservePage]
    })
], ObservePageModule);
export { ObservePageModule };
//# sourceMappingURL=observe.module.js.map