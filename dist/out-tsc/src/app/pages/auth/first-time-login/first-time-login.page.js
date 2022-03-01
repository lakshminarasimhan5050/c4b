import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
let FirstTimeLoginPage = class FirstTimeLoginPage {
    constructor(authService, storage, router, alertController, alertService, platform, uniqueDeviceID) {
        this.authService = authService;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.alertService = alertService;
        this.platform = platform;
        this.uniqueDeviceID = uniqueDeviceID;
        this.err_msg = '';
        this.platform.ready().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.checkFirstTimeLogin();
        }));
        this.uniqueDeviceID.get()
            .then((uuid) => console.log(uuid))
            .catch((error) => console.log(error));
    }
    /**
     * ngOnInit
     */
    ngOnInit() { }
    /**
     * Check if the first-time-login step is done or not.
     */
    checkFirstTimeLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.authService.get('session_first_time_login').then(sess => {
                if (sess == true) {
                    this.router.navigateByUrl('/login');
                }
            }).catch(e => {
                //
            });
        });
    }
    /**
     * Generate OTP and send to the user
     */
    sendOTP() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var random_otp = Math.floor((Math.random() * 9999) + 1000);
            this.original_otp = random_otp;
            this.presentAlertPrompt(random_otp);
        });
    }
    /**
     * Show the OTP to the user through the alert
     * @param otp
     */
    presentAlertPrompt(otp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'One Time Password (OTP)',
                inputs: [
                    {
                        name: 'otp',
                        type: 'text',
                        placeholder: 'OTP',
                        value: otp
                    }
                ],
                buttons: [
                    {
                        text: 'SUBMIT',
                        handler: data => {
                            if (data.otp) {
                                //console.log(data.otp);
                                this.otp = data.otp;
                                this.err_msg = '';
                            }
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    /**
     * This is the first time login by entering department id and phone number
     * and OTP
     * @param form
     */
    first_time_login(form) {
        if (this.department_id && this.phone_number) {
            if (this.otp == this.original_otp) {
                this.authService.set('session_first_time_login', true).then(result => {
                    this.router.navigateByUrl("/login");
                }).catch(e => {
                    //
                });
            }
            else {
                this.err_msg = "OTP mismatch!";
            }
        }
        else {
            this.err_msg = "Please fill all the mandatory fields!";
        }
    }
};
FirstTimeLoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-first-time-login',
        templateUrl: './first-time-login.page.html',
        styleUrls: ['./first-time-login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Storage,
        Router,
        AlertController,
        AlertService,
        Platform,
        UniqueDeviceID])
], FirstTimeLoginPage);
export { FirstTimeLoginPage };
//# sourceMappingURL=first-time-login.page.js.map