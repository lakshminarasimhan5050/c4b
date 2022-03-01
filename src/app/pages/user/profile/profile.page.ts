import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: any;
  password: any;
  confirm_password: any;
  phone_number: any;
  emergency_phone_number: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private alertService: AlertService,
    private authService: AuthService
  ) { }


  /**
   * ngOnInit
   */
  ngOnInit() { }



  /**
   * Profile form submit
   * @param form 
   */
  async formSubmit(form: NgForm) {
    var formdata = {
      "data": {
        "username": this.username,
        "password": this.password,
        "phone_number": this.phone_number,
        "emergency_phone_number": this.emergency_phone_number
      }
    };

    await this.authService.set("session_profile_skip", true);
    this.alertService.presentToast("Profile successfully updated");
    this.router.navigateByUrl('/home');
  }

}
