import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform,NavController } from '@ionic/angular';

import { Location } from "@angular/common";
declare var jQuery;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  constructor(
    private router:Router,
    private platform: Platform,
    private location: Location,
    public navCtrl:NavController
  ) {
    this.platform.ready().then(() => {
      // jQuery(document).ready(function() {
      //   jQuery('.myhome').click(function() {
      //     jQuery(".q1Kids, .q2Kids, .q3Kids, .q4Kids, .q5Kids, .q6Kids").removeClass("show").css("display","none");
      //     jQuery(".mcGraphics .logoContainer, .mcButtons").css("display","block");
      //     jQuery(".mcGraphics .logoContainer, .q1, .q2, .q3, .q4, .q5, .q6").removeClass("shrink").removeClass("active");
      //   });
      // });
    });
   }

  ngOnInit() {}


  goto(url) {
    this.router.navigateByUrl(url);
  }
  app:any;
  myBackButton(){
    console.log(window.location.origin);
    console.log(window.location.href)
    if(window.location.href==window.location.origin+'/home'){
      this.router.navigateByUrl('/home');
    }else{
      this.location.back();
    }
    //console.log(this.navCtrl.getActive().name)
  }

}
