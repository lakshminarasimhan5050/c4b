import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { NativeStorage } from '@ionic-native/native-storage/ngx'; // Remove the plugin
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
        providers: [
            StatusBar,
            SplashScreen,
            Geolocation,
            NativeGeocoder,
            UniqueDeviceID,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map