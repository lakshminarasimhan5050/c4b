import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var jQuery;

@Component({
  selector: 'app-sleep-logs',
  templateUrl: './sleep-logs.page.html',
  styleUrls: ['./sleep-logs.page.scss'],
})
export class SleepLogsPage implements OnInit {

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
        // JavaScript Document
      jQuery(document).ready(function() {
        
        jQuery('.infoPopup').click(function() {	
        
          jQuery(this).parent().siblings(".summaryPopup").css('display','block');
        
        });	

        jQuery('.rBar a').click(function() {	
          var rating = jQuery(this).html();
          jQuery(this).parent().siblings("input.br-current-rating").val(rating);
        
          jQuery(this).parent().children().siblings().removeclass("br-current");	
          jQuery(this).addclass("br-current");
        });	
        
        
        jQuery('.sgTabs div').click(function() {	
        
          var tit = jQuery(this).attr("id"); 
          jQuery('.sgTabsMatter').css("display","none");
        
        
          jQuery('#'+tit+'Matr').css("display","block");

        });	

        
      });
    });
  }

  ngOnInit() {
  }
  intencity:any=-1;
  reaction:any=-1;
  

  changeIntencity(newVal){
    this.intencity=newVal;
  }
  changeReaction(newVal){
    this.reaction=newVal;
  }
  
}
