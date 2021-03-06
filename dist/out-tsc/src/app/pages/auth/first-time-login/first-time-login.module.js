import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FirstTimeLoginPageRoutingModule } from './first-time-login-routing.module';
import { FirstTimeLoginPage } from './first-time-login.page';
let FirstTimeLoginPageModule = class FirstTimeLoginPageModule {
};
FirstTimeLoginPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FirstTimeLoginPageRoutingModule
        ],
        declarations: [FirstTimeLoginPage]
    })
], FirstTimeLoginPageModule);
export { FirstTimeLoginPageModule };
//# sourceMappingURL=first-time-login.module.js.map