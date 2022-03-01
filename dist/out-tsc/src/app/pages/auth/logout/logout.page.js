import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
let LogoutPage = class LogoutPage {
    constructor(authService) {
        this.authService = authService;
        //Logout the current user 
        this.authService.logout();
    }
    ngOnInit() {
    }
};
LogoutPage = tslib_1.__decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.page.html',
        styleUrls: ['./logout.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], LogoutPage);
export { LogoutPage };
//# sourceMappingURL=logout.page.js.map