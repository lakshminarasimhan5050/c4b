import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
let LoginPage = class LoginPage {
    constructor(authService, modalController, navCtrl, alertService, storage, router, platform) {
        this.authService = authService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.platform.ready().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.checkIfUserLoggedIn();
        }));
    }
    /**
     * ngOnInit
     */
    ngOnInit() { }
    /**
     * Check if any user is logged in or not
     */
    checkIfUserLoggedIn() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.authService.getObject("session_user").then((session) => {
                session = JSON.parse(JSON.stringify(session));
                if (session) {
                    if (session.user_id != '' && session.token != '') {
                        this.authService.get("session_profile_skip").then((sess) => {
                            if (sess != null && sess) {
                                this.router.navigateByUrl("/home");
                            }
                            else {
                                this.router.navigateByUrl("/profile");
                            }
                        });
                    }
                }
            });
        });
    }
    /**
     * Login form submit
     */
    loginCheck(form) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!form.invalid) {
                let formdata = {
                    "data": {
                        "username": this.user_id,
                        "password": this.password,
                    }
                };
                var username = this.user_id;
                var password = this.password;
                if (username != null && username != '' && password != null && password != '') {
                    if (username == "user" && password == "1234") {
                        var user_session_data = {
                            "user_id": username,
                            "token": "cvhgkhgkv657577567fghff576f5f65edf"
                        };
                        yield this.authService.setObject("session_user", user_session_data);
                        this.authService.get('session_profile_skip').then((sess) => {
                            if (sess != null && sess) {
                                this.router.navigateByUrl("/home");
                            }
                            else {
                                this.router.navigateByUrl("/profile");
                            }
                        });
                    }
                    else {
                        this.err_msg = "Invalid username and password!";
                    }
                }
                else {
                    this.err_msg = "Username and password are required";
                }
            }
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        ModalController,
        NavController,
        AlertService,
        Storage,
        Router,
        Platform])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map