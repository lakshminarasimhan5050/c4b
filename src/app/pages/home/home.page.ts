import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';
// declare var jQuery;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private platform : Platform,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private dataServ: DataService
  ) 
  {
    // this.platform.ready().then(() => { 
    //   //alert("Radhaswami")
    //   jQuery(document).ready(function() {
    //   });
    // });
  }


  /**
   * 
   */
  /* ionViewDidEnter() {
    document.addEventListener("backbutton", async () => { 
      // code that is executed when the user pressed the back button
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
          this.lastTimeBackPress = new Date().getTime();
        //}
      } 
      return false;
    });
  } */

  goToPage(page) {
    var url = '';
    switch (page) {
      case "biohack":
        url = "move-well/bio-hack-details";
        break;

      case "sos":
        url = "think-well/sos-emotion-process-details";
        break;

      case "stop":
        url = "think-well/stop";
        break;
      
      case "assessment":
        url = "eat-well/assessment";
        break;
    
      case "balanced_plate":
        url = "eat-well/balanced-plate";
        break;
      
      case "nutrition":
        url = "eat-well/nutrition";
        break;
        
      default:
        break;
    }

    this.router.navigateByUrl(url);
  }

  goto(url) {
    this.router.navigateByUrl(url);
  }

  debrief(){
    this.router.navigateByUrl('/think/debrief').then(e=>{window.location.reload()});
  }

  ionViewWillEnter() {
    //this.dataServ.show_home = true;
    //console.log(this.dataServ.show_home);
  }

}
