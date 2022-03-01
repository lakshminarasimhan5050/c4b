import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
let RegisterPage = class RegisterPage {
    constructor(zone, modalController, authService, dataService, navCtrl, alertService, router, platform, geolocation, nativeGeocoder) {
        this.zone = zone;
        this.modalController = modalController;
        this.authService = authService;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.router = router;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform.ready().then(() => {
            $("body").addClass("animsition page-register layout-full page-dark");
            this.getUserLocation();
        });
    }
    ngOnInit() {
    }
    //Dismiss Register Modal
    /* dismissRegister() {
      this.modalController.dismiss();
    } */
    // On Login button tap, dismiss Register modal and open login Modal
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /* this.dismissRegister();
            const loginModal = await this.modalController.create({
                component: LoginPage,
            });
            return await loginModal.present(); */
            this.router.navigateByUrl("/login");
        });
    }
    register(form) {
        let formdata = {
            "data": {
                "company_name": form.value.company_name,
                "company_address": form.value.company_address,
                "name": form.value.name,
                "mobile": form.value.mobile,
                "address": form.value.address,
                "email": form.value.email,
                "password": form.value.password
            }
        };
        console.log(formdata);
        this.dataService.post_request_api_call("auth/registration", formdata).then((result) => {
            var res = JSON.parse(JSON.stringify(result));
            form.reset();
            if (res.success) {
                this.alertService.presentToast(res.message);
                this.router.navigateByUrl('/login');
            }
            else {
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
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            }
        }).catch((error) => {
            //Nothing to do
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            let options = {
                useLocale: true,
                maxResults: 5
            };
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                console.log('not cordove');
                this.getGeoLocation(data.coords.latitude, data.coords.longitude);
            }
        });
    }
    getGeoLocation(lat, lng, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (navigator.geolocation) {
                let geocoder = yield new google.maps.Geocoder();
                let latlng = yield new google.maps.LatLng(lat, lng);
                let request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
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
                        });
                    }
                });
            }
        });
    }
    reverseGeocode(lat, lng) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then((result) => this.userLocationFromLatLng = result[0])
                .catch((error) => console.log(error));
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    }
    forwardGeocode(address) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options)
                .then((result) => {
                this.zone.run(() => {
                    this.lat = result[0].latitude;
                    this.lng = result[0].longitude;
                });
            })
                .catch((error) => console.log(error));
        }
        else {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.zone.run(() => {
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    //alert('Error - ' + results + ' & Status - ' + status)
                }
            });
        }
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone,
        ModalController,
        AuthService,
        DataService,
        NavController,
        AlertService,
        Router,
        Platform,
        Geolocation,
        NativeGeocoder])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map