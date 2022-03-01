import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private env: EnvService,
  ) { }




  /**
   * Call any POST API through this function
   * @param url 
   * @param formdata
   */
  async post_request_api_call(url, formdata = null) {
    return new Promise((resolve, reject) => {
      this.http.post(this.env.API_URL + url, formdata).subscribe(res => {
          resolve(res);
        },
        (err) =>
        {
          reject(err);
        });
    });
  }




  /**
   * Call any GET API through this function
   * @param url 
   * @param formdata can be null in case of GET method
   */
  async get_request_api_call(url, formdata = null) {
    return  new Promise((resolve, reject) => {
      this.http.post(this.env.API_URL + url, formdata).subscribe(res => {
          resolve(res);
        },
        (err) => {
          reject(err);
        });
    });
  }
}
