import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { AlertController } from 'ionic-angular';
let AlertService = class AlertService {
    constructor(router, toastController, alertController) {
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.is_ok = false;
        this.is_cancel = false;
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'bottom',
                animated: true,
                cssClass: "toast_css",
                color: 'light'
            });
            toast.present();
        });
    }
    showConfirmAlert() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alertConfirm = yield this.alertController.create({
                header: 'Delete Items',
                message: 'Are You Sure to delete this itemss?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            console.log('No clicked');
                            this.is_ok = false;
                            this.is_cancel = true;
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('Yes clicked');
                            this.is_ok = true;
                            this.is_cancel = false;
                        }
                    }
                ]
            });
            alertConfirm.present();
        });
    }
    showalert(msg, link) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Success!',
                message: msg,
                cssClass: 'langDelete',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'secondary',
                        handler: () => {
                            if (link) {
                                this.router.navigateByUrl(link);
                            }
                            else {
                                window.location.reload();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AlertService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ToastController,
        AlertController])
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map