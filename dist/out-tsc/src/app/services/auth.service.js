import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
let AuthService = class AuthService {
    constructor(http, storage, env, router, platform) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.router = router;
        this.platform = platform;
        /**
         * variables for storing session data
         */
        this.is_logged_in = false;
        this.is_first_time_login = true;
        this.platform.ready().then(() => {
        });
    }
    //Set a key/value
    set(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, value);
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    //Get a key/value pair
    get(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                if (result != null) {
                    return result;
                }
                return null;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    // set a key/value object
    setObject(key, object) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, JSON.stringify(object));
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    // get a key/value object
    getObject(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                if (result != null) {
                    return JSON.parse(result);
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    //remove a single key value:
    remove(key) {
        this.storage.remove(key);
    }
    //delete all data from your application:
    clear() {
        this.storage.clear();
    }
    /**
     * Logout a user from the session
     */
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.clear();
            this.remove('session_first_time_login');
            this.remove('session_profile_skip');
            this.remove('session_user');
            this.router.navigateByUrl('/login');
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Storage,
        EnvService,
        Router,
        Platform])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map