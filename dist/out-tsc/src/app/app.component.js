import * as tslib_1 from "tslib";
import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform, IonRouterOutlet, ModalController, MenuController, ActionSheetController, PopoverController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(
    /* private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService */
    platform, splashScreen, statusBar, modalCtrl, menu, actionSheetCtrl, popoverCtrl, router, 
    //private toast: Toast,
    alertController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.alertController = alertController;
        // set up hardware back button event.
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.initializeApp();
        this.platform.ready().then(() => {
            /* document.addEventListener("backbutton", async () => {
              // code that is executed when the user pressed the back button
              //alert(this.router.url);
              if(this.router.url === '/home') {
                // if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                //   // this.platform.exitApp(); // Exit from app
                //   navigator['app'].exitApp(); // work in ionic 4
                // } else {
                  let alert = await this.alertController.create({
                    header: '',
                    message: 'Do you want exit from this app?',
                    buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Application exit prevented!');
                        }
                    },{
                        text: 'Close',
                        handler: () => {
                            // this.platform.exitApp(); // Close this application
                            navigator['app'].exitApp();
                        }
                    }]
                  });
                  alert.present();
                  //this.lastTimeBackPress = new Date().getTime();
                //}
              }
              return false;
            }); */
        });
        //this.backButtonEvent();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            //this.authService.setUserInfo();
        });
    }
};
tslib_1.__decorate([
    ViewChildren(IonRouterOutlet),
    tslib_1.__metadata("design:type", QueryList)
], AppComponent.prototype, "routerOutlets", void 0);
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        ModalController,
        MenuController,
        ActionSheetController,
        PopoverController,
        Router,
        AlertController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map