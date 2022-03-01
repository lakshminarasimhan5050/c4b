import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let BioHackDetailsPage = class BioHackDetailsPage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.platform.ready().then(() => {
        });
    }
    ngOnInit() {
    }
    goToPage(page) {
        var url = '';
        switch (page) {
            case "home":
                url = "/home";
                break;
            default:
                break;
        }
        this.router.navigateByUrl(url);
    }
};
BioHackDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-bio-hack-details',
        templateUrl: './bio-hack-details.page.html',
        styleUrls: ['./bio-hack-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], BioHackDetailsPage);
export { BioHackDetailsPage };
//# sourceMappingURL=bio-hack-details.page.js.map