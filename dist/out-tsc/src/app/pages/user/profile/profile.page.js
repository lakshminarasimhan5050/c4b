import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';
let ProfilePage = class ProfilePage {
    constructor(router, storage, alertService, authService) {
        this.router = router;
        this.storage = storage;
        this.alertService = alertService;
        this.authService = authService;
    }
    /**
     * ngOnInit
     */
    ngOnInit() { }
    /**
     * Profile form submit
     * @param form
     */
    formSubmit(form) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var formdata = {
                "data": {
                    "username": this.username,
                    "password": this.password,
                    "phone_number": this.phone_number,
                    "emergency_phone_number": this.emergency_phone_number
                }
            };
            yield this.authService.set("session_profile_skip", true);
            this.alertService.presentToast("Profile successfully updated");
            this.router.navigateByUrl('/home');
        });
    }
};
ProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        Storage,
        AlertService,
        AuthService])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map