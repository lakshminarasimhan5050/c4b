import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';


declare var $;
declare var google:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage implements OnInit {

  err_msg:any;


  userLocation;
  userCity;
  lat;
  lng;
  location;
  latLngResult;
  userLocationFromLatLng;


  constructor(
    public zone: NgZone, 
    private modalController: ModalController,
    private authService: AuthService,
    private dataService: DataService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private router:Router,
    private platform: Platform,
    public geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder
  ) {
      this.platform.ready().then(() => {
        $("body").addClass("animsition page-register layout-full page-dark");
        this.getUserLocation();
      })
   }



  ngOnInit() {
  }



  //Dismiss Register Modal
  /* dismissRegister() {
    this.modalController.dismiss();
  } */


  // On Login button tap, dismiss Register modal and open login Modal
  async login() {
    /* this.dismissRegister();
    const loginModal = await this.modalController.create({
        component: LoginPage,
    });
    return await loginModal.present(); */
    this.router.navigateByUrl("/login");
  }



  register(form: NgForm) {
    let formdata = {
      "data": {
        "company_name":form.value.company_name,
        "company_address":form.value.company_address,
        "name":form.value.name,
        "mobile":form.value.mobile,
        "address":form.value.address,
        "email":form.value.email,
        "password":form.value.password
      }
    };

    console.log(formdata);

    this.dataService.post_request_api_call("auth/registration", formdata).then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        form.reset();

        if(res.success) {
          this.alertService.presentToast(res.message);
          this.router.navigateByUrl('/login');
        } else {
            this.err_msg = res.message;
        }
    });
  }





    

  /* initializeApp() {
    //this.platform.ready().then(() => {
      this.getUserLocation();
    //});
  } */


  /*getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
    
    }).catch((error) => {
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data);
  
    });
  }*/



  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      if (this.platform.is('cordova')) {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };

        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result: any) => {
            console.log(result)
            this.userLocation = result[0]
            console.log(this.userLocation)
          })
          .catch((error: any) => console.log(error));
      } else {
        this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      }
    }).catch((error) => {
      //Nothing to do
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      if (this.platform.is('cordova')) {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
          .then((result: NativeGeocoderResult[]) => {
            console.log(result)
            this.userLocation = result[0]
            console.log(this.userLocation)
          })
          .catch((error: any) => console.log(error));
      } else {
        console.log('not cordove')
        this.getGeoLocation(data.coords.latitude, data.coords.longitude)
      }
    });
  }





  async getGeoLocation(lat: number, lng: number, type?) {
    if (navigator.geolocation) {
      let geocoder = await new google.maps.Geocoder();
      let latlng = await new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          console.log(result);
          this.zone.run(() => {
            if (result != null) {
              this.userCity = result.formatted_address;
              if (type === 'reverseGeocode') {
                this.latLngResult = result.formatted_address;
              }
            }
          })
        }
      });
    }
  }




  reverseGeocode(lat, lng) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(lat, lng, options)
        .then((result: NativeGeocoderResult[]) => this.userLocationFromLatLng = result[0])
        .catch((error: any) => console.log(error));
    } else {
      this.getGeoLocation(lat, lng, 'reverseGeocode');
    }
  }


  
  forwardGeocode(address) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(address, options)
        .then((result: NativeGeocoderResult[]) => {
          this.zone.run(() => {
            this.lat = result[0].latitude;
            this.lng = result[0].longitude;
          })
        })
        .catch((error: any) => console.log(error));
    } else {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.zone.run(() => {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
          })
        } else {
          //alert('Error - ' + results + ' & Status - ' + status)
        }
      });
    }
  }



}
