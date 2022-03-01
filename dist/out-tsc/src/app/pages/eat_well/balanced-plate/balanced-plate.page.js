import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let BalancedPlatePage = class BalancedPlatePage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
    }
    ngOnInit() {
    }
};
BalancedPlatePage = tslib_1.__decorate([
    Component({
        selector: 'app-balanced-plate',
        templateUrl: './balanced-plate.page.html',
        styleUrls: ['./balanced-plate.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], BalancedPlatePage);
export { BalancedPlatePage };
//# sourceMappingURL=balanced-plate.page.js.map