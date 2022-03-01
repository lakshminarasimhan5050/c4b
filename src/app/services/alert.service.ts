import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { AlertController } from 'ionic-angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  is_ok = false;
  is_cancel = false;

  constructor(
    private router: Router,
    private toastController:ToastController,
    private alertController:AlertController
    ) { }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom',
        animated:true,
        cssClass:"toast_css",
        color: 'light'
    });
    toast.present();
  }



  async showConfirmAlert() {
    const alertConfirm = await this.alertController.create({
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
  }




  async showalert(msg,link) {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: msg,
      cssClass: 'langDelete',
      buttons: [
         {
          text: 'Ok',
          cssClass: 'secondary',
          handler: () => {
            if(link){
             this.router.navigateByUrl(link);
            }else{
              window.location.reload();
            }
             
          }
        }
      ]
    });

    await alert.present();
  }


  
}
