import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let SosEmotionProcessDetailsPage = class SosEmotionProcessDetailsPage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.platform.ready().then(() => {
            //
        });
    }
    ngOnInit() {
    }
    gotToPage(page) {
        var url = '';
        switch (page) {
            case "stop":
                url = "think-well/stop";
                break;
            default:
                break;
        }
        this.router.navigateByUrl(url);
    }
};
SosEmotionProcessDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-sos-emotion-process-details',
        templateUrl: './sos-emotion-process-details.page.html',
        styleUrls: ['./sos-emotion-process-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], SosEmotionProcessDetailsPage);
export { SosEmotionProcessDetailsPage };
//# sourceMappingURL=sos-emotion-process-details.page.js.map