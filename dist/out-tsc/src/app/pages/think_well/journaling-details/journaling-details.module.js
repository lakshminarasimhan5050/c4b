import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JournalingDetailsPageRoutingModule } from './journaling-details-routing.module';
import { JournalingDetailsPage } from './journaling-details.page';
let JournalingDetailsPageModule = class JournalingDetailsPageModule {
};
JournalingDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            JournalingDetailsPageRoutingModule
        ],
        declarations: [JournalingDetailsPage]
    })
], JournalingDetailsPageModule);
export { JournalingDetailsPageModule };
//# sourceMappingURL=journaling-details.module.js.map