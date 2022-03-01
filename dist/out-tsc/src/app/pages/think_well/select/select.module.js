import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectPageRoutingModule } from './select-routing.module';
import { SelectPage } from './select.page';
let SelectPageModule = class SelectPageModule {
};
SelectPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SelectPageRoutingModule
        ],
        declarations: [SelectPage]
    })
], SelectPageModule);
export { SelectPageModule };
//# sourceMappingURL=select.module.js.map