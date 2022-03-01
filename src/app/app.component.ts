import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, ModalController, MenuController, ActionSheetController, PopoverController, ToastController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    /* private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService */
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    //private toast: Toast,
    private alertController: AlertController,
  ) {
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
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#053268');
      //this.authService.setUserInfo();
    });
  }




  /* ionViewDidEnter() {
    document.addEventListener("backbutton", async () => { 
      // code that is executed when the user pressed the back button
      alert(this.router.url);
      if(this.router.url === '/home') {
        // if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {  
        //   // this.platform.exitApp(); // Exit from app
        //   navigator['app'].exitApp(); // work in ionic 4
        // } else {
          let alert = await this.alertController.create({
            header: '',
            message: 'Do you want to close the app?',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Application exit prevented!');
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
    });
  } */





  /*backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
        // close action sheet
        try {
            const element = await this.actionSheetCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close popover
        try {
            const element = await this.popoverCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close modal
        try {
            const element = await this.modalCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
            console.log(error);

        }

        // close side menua
        try {
            const element = await this.menu.getOpen();
            if (element !== null) {
                this.menu.close();
                return;

            }

        } catch (error) {

        }

        this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();

            } else if (this.router.url === '/home') {
                if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                    // this.platform.exitApp(); // Exit from app
                    navigator['app'].exitApp(); // work in ionic 4

                } else {
                  let toast =  await this.toastCtrl.create({
                    message: 'Press back again to exit App.',
                    duration: 2500,
                    position: 'bottom',
                    animated:true,
                    //cssClass:"my-custom-class"
                  });
                  toast.present();
                    // this.toast.show(
                    //     `Press back again to exit App.`,
                    //     '2000',
                    //     'center')
                    //     .subscribe(toast => {
                    //         // console.log(JSON.stringify(toast));
                    //     });
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    });
  }*/
}
