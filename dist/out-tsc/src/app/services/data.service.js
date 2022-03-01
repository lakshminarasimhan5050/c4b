import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
let DataService = class DataService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    /**
     * Call any POST API through this function
     * @param url
     * @param formdata
     */
    post_request_api_call(url, formdata = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.post(this.env.API_URL + url, formdata).subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
    /**
     * Call any GET API through this function
     * @param url
     * @param formdata can be null in case of GET method
     */
    get_request_api_call(url, formdata = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.post(this.env.API_URL + url, formdata).subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        EnvService])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map