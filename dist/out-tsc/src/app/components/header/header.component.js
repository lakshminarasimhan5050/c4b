import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
let HeaderComponent = class HeaderComponent {
    constructor(platform, router, authService, alertService, navCtrl) {
        this.platform = platform;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.is_incrisis = false;
        this.is_sidemenu = false;
        this.platform.ready().then(() => {
            //Check if any user is logged in or not
            this.checkAuthentication();
            jQuery(document).ready(function () {
                jQuery(document).on("click", ".main_menu", function () {
                    //window.location.reload();
                    window.location.href = "/home";
                    return false;
                });
                /* jQuery('#inCrisis').click(function() {
                  jQuery(".popOverlay").css('display','block');
                  jQuery(".inCrisisPopup").css('display','block');
                }); */
                jQuery('.topNavAnchor').click(function () {
                    jQuery(".mainNav").css('display', 'block');
                    jQuery(".mainNav").delay(100).animate({ left: '0' });
                });
                jQuery('.closeMainNav').click(function () {
                    jQuery(".mainNav").css('display', 'none');
                    jQuery(".mainNav").delay(100).animate({ left: '-100%' });
                });
            });
        });
    }
    /**
     * ngOnInit
     */
    ngOnInit() { }
    /**
     * Check for user authentication. If no user is logged in then just logout
     */
    checkAuthentication() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.authService.getObject("session_user").then((sess) => {
                if (sess) {
                    sess = JSON.parse(JSON.stringify(sess));
                    if (sess.user_id == '' || sess.user_id == null || sess.token == '' || sess.token == null) {
                        this.authService.logout();
                    }
                }
            });
        });
    }
    /**
     * Go to the corresponding page based on the menu option was clicked
     * @param page
     */
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
    /**
     * Open / Close incrisis popup
     * @param action
     */
    crisis(action) {
        if (action == "show")
            this.is_incrisis = true;
        else if (action == "hide")
            this.is_incrisis = false;
    }
    /**
     * Open / Close sidemanu bar
     * @param action
     */
    sideMenu(action) {
        if (action == "close")
            this.is_sidemenu = false;
        else if (action == "open")
            this.is_sidemenu = true;
    }
    refreshPage() {
        //this.ionViewWillEnter();
        this.navCtrl.navigateRoot('/home');
    }
    ionViewWillEnter() {
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router,
        AuthService,
        AlertService,
        NavController])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map