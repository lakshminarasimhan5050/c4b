import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
declare var $;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  err_msg: any;
  user_id: any;
  password: any;

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage,
    private router: Router,
    private platform:Platform
  ) { 
      this.platform.ready().then(async () => { 
        await this.checkIfUserLoggedIn();
      });
  }



  /**
   * ngOnInit
   */
  ngOnInit() {}




  /**
   * Check if any user is logged in or not
   */
  async checkIfUserLoggedIn() {
    this.authService.getObject("session_user").then((session) => {
      session = JSON.parse(JSON.stringify(session));
      if(session) {
        if(session.user_id != '' && session.token != '') {
          this.authService.get("session_profile_skip").then((sess) => {
            if(sess != null && sess) {
              this.router.navigateByUrl("/home");
            } else {
              this.router.navigateByUrl("/profile");
            }
          });
        }
      }
    });
  }







  /**
   * Login form submit
   */
  async loginCheck(form: NgForm) {
    
    if(!form.invalid) {
      let formdata = {
        "data":{
          "username":this.user_id,
          "password":this.password,
        }
      };

      var username = this.user_id;
      var password = this.password;

      if(username != null && username != '' && password != null && password != '') {
        if(username == "user" && password == "1234") {
            var user_session_data = {
              "user_id":username,
              "token":"cvhgkhgkv657577567fghff576f5f65edf"
            }
            await this.authService.setObject("session_user", user_session_data);
            this.authService.get('session_profile_skip').then((sess) => {
              if(sess != null && sess) {
                this.router.navigateByUrl("/home");
              } else {
                this.router.navigateByUrl("/profile");
              }
            });
        } else {
          this.err_msg = "Invalid username and password!";
        }
      } else {
        this.err_msg = "Username and password are required";
      }
    }
  }
   


}
