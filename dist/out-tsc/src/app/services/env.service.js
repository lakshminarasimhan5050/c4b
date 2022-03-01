import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let EnvService = class EnvService {
    constructor() {
        this.ip = 'http://localhost:3333/';
        this.API_URL = this.ip + 'api/v1/';
    }
};
EnvService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], EnvService);
export { EnvService };
//# sourceMappingURL=env.service.js.map