import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoutPageRoutingModule } from './logout-routing.module';
import { LogoutPage } from './logout.page';
let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LogoutPageRoutingModule
        ],
        declarations: [LogoutPage]
    })
], LogoutPageModule);
export { LogoutPageModule };
//# sourceMappingURL=logout.module.js.map