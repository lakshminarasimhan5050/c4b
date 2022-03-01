import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  /** 
   * variables for storing session data
   */
   
   is_logged_in = false;
   is_first_time_login = true;
   token:any;





  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
    private router: Router,
    private platform: Platform
  ) { 
      this.platform.ready().then(() => {
      })
  }





  //Set a key/value
  async set(key: string, value: any): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }




  //Get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return result;
      }
      return null;
    } catch (error) {
        console.log(error);
      return null;
    }
  }




  // set a key/value object
  async setObject(key: string, object: Object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      return true;
    } catch (error) {
        console.log(error);
      return false;
    }
  }




  // get a key/value object
  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
        console.log(reason);
      return null;
    }
  }




  

  //remove a single key value:
  remove(key: string) {
    this.storage.remove(key);
  }



  //delete all data from your application:
  clear() {
    this.storage.clear();
  }




  /**
   * Logout a user from the session
   */
  async logout() {
    this.clear();
    this.remove('session_first_time_login');
    this.remove('session_profile_skip');
    this.remove('session_user');
    this.router.navigateByUrl('/login');
  }






}
