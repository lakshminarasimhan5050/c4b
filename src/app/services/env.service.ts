import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  ip = 'http://localhost:3333/';
  API_URL = this.ip + 'api/v1/';
  intensionColor = '';
  className='';
  constructor() {}
}