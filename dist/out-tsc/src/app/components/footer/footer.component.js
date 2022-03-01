import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
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
FooterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map