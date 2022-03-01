import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { NgForm } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-first-time-login',
  templateUrl: './first-time-login.page.html',
  styleUrls: ['./first-time-login.page.scss'],
})
export class FirstTimeLoginPage implements OnInit {

  department_id:any;
  phone_number:any;
  otp:any;
  original_otp:any;
  err_msg = '';

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController,
    private alertService: AlertService,
    private platform: Platform,
    private uniqueDeviceID: UniqueDeviceID
  ) {
      
        this.platform.ready().then(async () => {
            await this.checkFirstTimeLogin();
        });


        this.uniqueDeviceID.get()
          .then((uuid: any) => console.log(uuid))
          .catch((error: any) => console.log(error));
         
    }


  /**
   * ngOnInit
   */
  ngOnInit() {}



  /**
   * Check if the first-time-login step is done or not.
   */
  async checkFirstTimeLogin() {
    this.authService.get('session_first_time_login').then(sess => {
      if(sess == true) {
        this.router.navigateByUrl('/login');
      }
    }).catch(e => {
        //
    });
  }





  /**
   * Generate OTP and send to the user
   */
  async sendOTP() {
    var random_otp = Math.floor((Math.random() * 9999) + 1000);
    this.original_otp = random_otp;
    this.presentAlertPrompt(random_otp);
  }






  /**
   * Show the OTP to the user through the alert
   * @param otp
   */
  async presentAlertPrompt(otp) {
    const alert = await this.alertController.create({
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
            if(data.otp){
              //console.log(data.otp);
              this.otp = data.otp;
              this.err_msg = '';
            }
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }



  /**
   * This is the first time login by entering department id and phone number
   * and OTP
   * @param form 
   */
  first_time_login(form:NgForm) {
    if(this.department_id && this.phone_number) {
      if(this.otp == this.original_otp) {
        this.authService.set('session_first_time_login', true).then(result => {
          this.router.navigateByUrl("/login");
        }).catch(e => {
            //
        });
      } else {
        this.err_msg = "OTP mismatch!";
      }
    } else {
      this.err_msg = "Please fill all the mandatory fields!";
    }
  }

}
