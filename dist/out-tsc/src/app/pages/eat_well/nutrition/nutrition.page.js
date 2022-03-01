import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let NutritionPage = class NutritionPage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
    }
    ngOnInit() {
    }
};
NutritionPage = tslib_1.__decorate([
    Component({
        selector: 'app-nutrition',
        templateUrl: './nutrition.page.html',
        styleUrls: ['./nutrition.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], NutritionPage);
export { NutritionPage };
//# sourceMappingURL=nutrition.page.js.map