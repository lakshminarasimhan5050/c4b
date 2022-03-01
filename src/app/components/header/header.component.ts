import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { DataService } from 'src/app/services/data.service';
declare var jQuery;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  is_incrisis = false;
  is_sidemenu = false;

  constructor(
    private platform : Platform,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private dataServ: DataService
    ) 
  { 
    this.platform.ready().then(() => {
      //Check if any user is logged in or not
      this.checkAuthentication();

      jQuery(document).ready(function() {

        jQuery('.infoPopup').click(function() {	
          jQuery(this).parent().siblings(".summaryPopup").css('display','block');
        });
        
        jQuery(document).on('click', '.topNavLogo, .homeScreen', function() {
          jQuery(".q1Kids, .q2Kids, .q3Kids, .q4Kids, .q5Kids, .q6Kids").removeClass("show").css("display","none");
          jQuery(".qTitle").css("display","block");
          jQuery(".ab").css("display","none");
          jQuery(".mcGraphics .logoContainer, .mcButtons").css("display","block");
          jQuery(".mcGraphics .logoContainer, .q1, .q2, .q3, .q4, .q5, .q6").removeClass("shrink").removeClass("active");
        });

        jQuery('.topNavAnchor').click(function() {	
          jQuery(".mainNav").css('display','block');	
        });

        jQuery('.closeMainNav').click(function() {	
          jQuery(".mainNav").css('display','none');
        });



        jQuery(".qOverlay,.hideLogo").click(function() {
          jQuery(".logoContainer").hide();
      });

      

    //   jQuery(document).on("click", ".q1, .q2, .q3, .q4, .copingBtn, .communityBtn", function() {
    //     jQuery(".logoContainer").css('display','none');
    //   });



    //   jQuery('.q1').click(function() {

        
    
      
    // if (jQuery(this).is(".q1.shrink")) { 
      
    //   jQuery(this).siblings().removeClass('active');
    //   jQuery(".q1").addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    //   var k = jQuery(this).attr('title');
    //     k = 'q1Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
    
        
    //     jQuery(".q1KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});
        
        
        
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');
    //     jQuery(".q4Kids").css('display','none'); jQuery(".q5Kids").css('display','none'); jQuery(".q6Kids").css('display','none');jQuery(".q7Kids").css('display','none');
        
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');
    //     jQuery(".q4Kids").removeClass('show'); jQuery(".q5Kids").removeClass('show'); jQuery(".q6Kids").removeClass('show'); jQuery(".q7Kids").removeClass('show'); 		  
        
            
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
          
    
    // }
    
    // else if(jQuery(this).is(".q1")){
        
    //       jQuery(this).toggleClass('shrink');
      
    //   jQuery(this).siblings().removeClass('active');
    //   jQuery(".q2").addClass('active');
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = 'q2Kids';
    //     jQuery("." + k).toggleClass('show');
    //     //jQuery(".mcGraphics").toggleClass('flexChange');
        
        
    //     jQuery(".q2KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(2)").delay(200).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(3)").delay(400).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(4)").delay(600).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(5)").delay(800).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(6)").delay(1000).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(7)").delay(1200).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(8)").delay(1400).animate({width: '99%'}); 
          
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
        
    // }
    
    //     });
    
    
      
    
    // jQuery('.q2').click(function() {		jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q2.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //   jQuery(this).siblings().removeClass('active');
    //   jQuery(".q2").addClass('active');
    
    //     var k = jQuery(this).attr('title');
    //     k = 'q2Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
      
    //     jQuery(".q2KidsList li:first-child").delay(300).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q2KidsList li:nth-child(4)").delay(900).animate({width: '99%'});	
    //     jQuery(".q2KidsList li:nth-child(5)").delay(1100).animate({width: '99%'}); 
        
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');
    //     jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');
    //     jQuery(".q4Kids").removeClass('show');  jQuery(".q5Kids").removeClass('show');  jQuery(".q6Kids").removeClass('show'); 
        
        
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
          
    
        
    
    //      } 
       
    //    else if(jQuery(this).is(".q2")){
    //   jQuery(this).toggleClass('shrink');
        
    //   jQuery(this).siblings().removeClass('active');
    // jQuery(".q1").addClass('active');
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = 'q1Kids';
    //     jQuery("." + k).toggleClass('show');
    //     //jQuery(".mcGraphics").toggleClass('flexChange');
        
    //     jQuery(".q1KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(2)").delay(200).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(3)").delay(400).animate({width: '99%'});	
    //     jQuery(".q1KidsList li:nth-child(4)").delay(600).animate({width: '99%'});	
    //     jQuery(".q1KidsList li:nth-child(5)").delay(800).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(6)").delay(1000).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(7)").delay(1200).animate({width: '99%'});
    //     jQuery(".q1KidsList li:nth-child(8)").delay(1400).animate({width: '99%'});   
        
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
          
    //    }
    
    //     });	
      
    
    
    
    
    // jQuery('.q3').click(function() {	   	jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q3.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //       jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     //jQuery(".mcGraphics").addClass('flexChange');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
        
    //     jQuery(".q3KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});	  
        
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q4Kids").css('display','none'); jQuery(".q5Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q4Kids").removeClass('show');jQuery(".q5Kids").removeClass('show');jQuery(".q6Kids").removeClass('show');
        
        
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
        
    
    //      } 
       
    //    else if(jQuery(this).is(".q3")){
    //   jQuery(this).toggleClass('shrink');
    //     jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).toggleClass('show');
    //     jQuery(".mcGraphics").toggleClass('flexChange');
        
    //     jQuery(".q3KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(2)").delay(200).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(3)").delay(400).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(4)").delay(600).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(5)").delay(800).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(6)").delay(1000).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(7)").delay(1020).animate({width: '99%'});
    //     jQuery(".q3KidsList li:nth-child(8)").delay(1040).animate({width: '99%'});	
        
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
          
    //    }
    
    //     });	
      
      
      
      
      
    // jQuery('.q4').click(function() {	 	jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q4.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //       jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     //jQuery(".mcGraphics").addClass('flexChange');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
      
    //     jQuery(".q4KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});	  
    
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');jQuery(".q5Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');jQuery(".q5Kids").removeClass('show');jQuery(".q6Kids").removeClass('show');
            
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    
    //      } 
       
    //    else if(jQuery(this).is(".q4")){
    //   jQuery(this).toggleClass('shrink');
    //     jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).toggleClass('show');
    //     jQuery(".mcGraphics").toggleClass('flexChange');
        
    //     jQuery(".q4KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(2)").delay(200).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(3)").delay(400).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(4)").delay(600).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(5)").delay(800).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(6)").delay(1000).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(7)").delay(1020).animate({width: '99%'});
    //     jQuery(".q4KidsList li:nth-child(8)").delay(1040).animate({width: '99%'});	
    
        
    //     jQuery("span.qTitle").css('display','none');
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    //    }
    
    //     });	
    
    
    
    
    // jQuery('.q5').click(function() {	  	jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q5.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //       jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     //jQuery(".mcGraphics").addClass('flexChange');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
      
    //     jQuery(".q5KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');jQuery(".q4Kids").css('display','none');jQuery(".q6Kids").css('display','none');jQuery(".q7Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');jQuery(".q4Kids").removeClass('show');jQuery(".q6Kids").removeClass('show');jQuery(".q7Kids").removeClass('show');
            
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    
    //      } 
       
    //    else if(jQuery(this).is(".q5")){
    //   jQuery(this).toggleClass('shrink');
    //     jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).toggleClass('show');
        
    //     jQuery(".q5KidsList li:first-child").delay(300).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q5KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    
        
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    //    }
    
    //     });	
      
      
      
    // jQuery('.q6').click(function() {	   	jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q6.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //       jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     //jQuery(".mcGraphics").addClass('flexChange');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
      
    //     jQuery(".q6KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(9)").delay(1900).animate({width: '99%'});
    
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');jQuery(".q7Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');jQuery(".q4Kids").removeClass('show');jQuery(".q5Kids").removeClass('show');jQuery(".q7Kids").removeClass('show');
            
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    
    //      } 
       
    //    else if(jQuery(this).is(".q6")){
    //   jQuery(this).toggleClass('shrink');
    //     jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).toggleClass('show');
        
    //     jQuery(".q6KidsList li:first-child").delay(0).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});
    //     jQuery(".q6KidsList li:nth-child(9)").delay(1900).animate({width: '99%'});
    
        
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    //    }
    
    //     });		
      
      
    // jQuery('.q7').click(function() {	    	jQuery(".logoContainer").css('display','none');
    
          
    //    if (jQuery(this).is(".q7.shrink")) { 
    //       jQuery(this).addClass('shrink');
    //       jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     //jQuery(".mcGraphics").addClass('flexChange');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).addClass('show');
    //     jQuery("." + k).css('display','block');
    //     jQuery("." +k+'List li').css('display','block');
    //     jQuery("." +k+'List li').css('width','0');
        
      
    //     jQuery(".q7KidsList li:first-child").delay(300).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    
        
    //     jQuery(".q1Kids").css('display','none');
    //     jQuery(".q2Kids").css('display','none');
    //     jQuery(".q3Kids").css('display','none');jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
    //     jQuery(".q1Kids").removeClass('show');
    //     jQuery(".q2Kids").removeClass('show');
    //     jQuery(".q3Kids").removeClass('show');jQuery(".q4Kids").removeClass('show');jQuery(".q5Kids").removeClass('show');jQuery(".q6Kids").removeClass('show');
            
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    
    //      } 
       
    //    else if(jQuery(this).is(".q6")){
    //   jQuery(this).toggleClass('shrink');
    //     jQuery(this).addClass('active');
    //   jQuery(this).siblings().removeClass('active');
    
    //     jQuery(this).siblings().toggleClass('shrink');
    //     var k = jQuery(this).attr('title');
    //     k = k+'Kids';
    //     jQuery("." + k).toggleClass('show');
        
    //     jQuery(".q7KidsList li:first-child").delay(300).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
    //     jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    
        
    //     jQuery("span.qTitle").css('display','none');
        
    //     jQuery(".q5.shrink").css('display','block');
    //     jQuery(".q6.shrink").css('display','block');
    //     jQuery(".q7.shrink").css('display','block');
    //     jQuery(".mcButtons").css('display','none');
    //     jQuery(".summaryPopup").css('display','none');
    
    //    }
    
    //     });			
      
      
      
    /*	
    jQuery('.q5').click(function() {	
    
          jQuery(this).addClass('active');
      jQuery(this).siblings().removeClass('active');
    
          var k = jQuery(this).attr('title');
        var k = k+'Kids';
        jQuery("." + k).addClass('show');
        jQuery("." + k).css('display','block');
    
        
        jQuery(".q1Kids").css('display','none');
        jQuery(".q2Kids").css('display','none');jQuery(".q3Kids").css('display','none');
        jQuery(".q4Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
        jQuery(".q1Kids").removeClass('show');
        jQuery(".q2Kids").removeClass('show');
        jQuery(".q3Kids").removeClass('show');jQuery(".q4Kids").removeClass('show');	  jQuery(".q6Kids").removeClass('show');
        
        
        jQuery("span.qTitle").css('display','none');
        
        jQuery(".q5.shrink").css('display','block');
        jQuery(".q6.shrink").css('display','block');
        jQuery(".mcButtons").css('display','none');
    
        });	
      
    jQuery('.q6').click(function() {	
    
          jQuery(this).addClass('active');
      jQuery(this).siblings().removeClass('active');
    
          var k = jQuery(this).attr('title');
        var k = k+'Kids';
        jQuery("." + k).addClass('show');
        jQuery("." + k).css('display','block');
    
        
        jQuery(".q1Kids").css('display','none');
        jQuery(".q2Kids").css('display','none');jQuery(".q3Kids").css('display','none');
        jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');
        
        jQuery(".q1Kids").removeClass('show');
        jQuery(".q2Kids").removeClass('show');
        jQuery(".q3Kids").removeClass('show');jQuery(".q4Kids").removeClass('show');	  jQuery(".q5Kids").removeClass('show');
        
        
        jQuery("span.qTitle").css('display','none');
        
        jQuery(".q5.shrink").css('display','block');
        jQuery(".q6.shrink").css('display','block');
        jQuery(".mcButtons").css('display','none');
    
        });	
    
    */	
      
    jQuery('.copingBtn').click(function() {	
    
          jQuery(".q5").addClass('active');
        jQuery(".mcGraphics").children().addClass('shrink');
        jQuery(".q5Kids").addClass('show');
        jQuery(".q5Kids").css('display','block');
    
        
        jQuery(".q1Kids").css('display','none');
        jQuery(".q2Kids").css('display','none');jQuery(".q3Kids").css('display','none');
        jQuery(".q4Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
        
        jQuery(".q5KidsList li:first-child").delay(300).animate({width: '99%'});
        jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
        jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
        jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
        jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
        jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
    
        
        jQuery("span.qTitle").css('display','none');
        
        jQuery(".q5.shrink").css('display','block');
        jQuery(".q6.shrink").css('display','block');
        jQuery(".q7.shrink").css('display','block');
        jQuery(".mcButtons").css('display','none');
    
        });	
    
    jQuery('.communityBtn').click(function() {	
    
          jQuery(".q6").addClass('active');
        jQuery(".mcGraphics").children().addClass('shrink');
        jQuery(".q6Kids").addClass('show');
        jQuery(".q6Kids").css('display','block');
    
        
        jQuery(".q1Kids").css('display','none');
        jQuery(".q2Kids").css('display','none');jQuery(".q3Kids").css('display','none');
        jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');
        
        jQuery(".q6KidsList li:first-child").delay(300).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({width: '99%'});
        jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({width: '99%'});
    
        
        jQuery("span.qTitle").css('display','none');
        
        jQuery(".q5.shrink").css('display','block');
        jQuery(".q6.shrink").css('display','block');
        jQuery(".q7.shrink").css('display','block');
        jQuery(".mcButtons").css('display','none');
    
        });	
    
    jQuery('.resourcesBtn').click(function() {	
    
          jQuery(".q7").addClass('active');
        jQuery(".mcGraphics").children().addClass('shrink');
        jQuery(".q7Kids").addClass('show');
        jQuery(".q7Kids").css('display','block');
    
        
        jQuery(".q1Kids").css('display','none');
        jQuery(".q2Kids").css('display','none');jQuery(".q3Kids").css('display','none');
        jQuery(".q4Kids").css('display','none');jQuery(".q5Kids").css('display','none');jQuery(".q6Kids").css('display','none');
        
        jQuery(".q7KidsList li:first-child").delay(300).animate({width: '99%'});
        jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({width: '99%'});
        jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({width: '99%'});
        jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({width: '99%'});
    
        
        jQuery("span.qTitle").css('display','none');
        
        jQuery(".q5.shrink").css('display','block');
        jQuery(".q6.shrink").css('display','block');
        jQuery(".q7.shrink").css('display','block');
        jQuery(".mcButtons").css('display','none');
    
        });	
      
      
      
    
    
    
    jQuery('#inCrisis').click(function() {	
      
      jQuery(".popOverlay").css('display','block');
      jQuery(".inCrisisPopup").css('display','block');
      
      });
      
    jQuery('.notNowBtn').click(function() {	
      
      jQuery(".popOverlay").css('display','none');
      jQuery(".inCrisisPopup").css('display','none');
      
      });
    
    jQuery('.topNavAnchor').click(function() {	
      jQuery(".mainNav").css('display','block');	
      jQuery(".mainNav").animate({left: '0'});
      });	
    
    
    
    jQuery('.closeMainNav').click(function() {	
      jQuery(".mainNav").css('display','none');
      jQuery(".mainNav").animate({left: '-100%'});
      
      });	
    jQuery('.mainNavList li').click(function() {	
      jQuery(".mainNav").css('display','none');
      jQuery(".mainNav").animate({left: '-100%'});
      
      });				
        
      
    
    jQuery('.qkidsList li .infoPopup').click(function() {	
      
      jQuery(this).parent().css('overflow','unset');
      jQuery(this).parent().siblings(".summaryPopup").css('display','block');
      
      });
    
    jQuery('.infoPopup').click(function() {	
      
      jQuery(this).parent().css('overflow','unset');
      jQuery(this).siblings(".summaryPopup").css('display','block');
      
      });	
      
    jQuery('.infoPopupHowWorks').click(function() {	
      
      jQuery(".howitworksPop").css('display','block');
      
      });		
      
    jQuery('.abtPopup').click(function() {	
      
      jQuery(this).css('overflow','unset');
      jQuery(this).siblings(".abtSummaryPopup").css('display','block');
      
      });	
        
    jQuery('.saLeft').click(function() {
      jQuery(this).parent().parent().css('display','none');
      
      });		
        
      
        
        
    jQuery('h3.codeStep').click(function() {  
    jQuery(".codeDetail").css('display','none');
    jQuery(this).siblings(".codeDetail").css('display','block');	
      });		
        
      
    setTimeout(function(){jQuery("#sa1").show();},6050);
      
    jQuery('#sa1').click(function() {	
    
        jQuery(this).css('display','none');
        jQuery("#sa2").css('display','none');
          jQuery("#sa2").css('display','block');
        jQuery("#sa3").css('display','block');
        
        //setTimeout(function(){jQuery("#sa2").hide();},15050);
        
        setTimeout(function(){jQuery("#sa2").css('display','none');},15050);
        
        //setTimeout(function(){jQuery("#sa1").css('display','block');},15051);
        
    
        var cycle = parseInt(jQuery(".sosCount").html());
        var cycleVal = cycle + 1;
    
        setTimeout(function(){ jQuery(".sosCount").html(cycleVal); }, 15000);
    
        });	
    
    jQuery('#sa3').click(function() {
      
      jQuery(this).css('display','none');
      jQuery("#sa1").css('display','block');
        
    });
      
    
    
    
    
    
    
    jQuery(".meter-tabs li").click(function(){	
    
        jQuery(this).siblings().removeClass("active");
        jQuery(this).removeClass("inactive").addClass("active");
        jQuery(".metermatr").css("display","none");
        var tit = jQuery(this).attr("title");
        jQuery("." + tit+"Matr").css("display","block");
    
      });		
        
    
    
    jQuery("#ccircle circle").click(function(){	
        jQuery(".meterTabsContent").css("display","none");
        var tit = jQuery(this).attr("id");
        jQuery("#" + tit+"Tabs").css("display","block");
        //jQuery(this).sibligs("circle").attr('stroke-opacity','0');
        jQuery("#angerMeter").attr('stroke-opacity','0');
        jQuery("#guiltMeter").attr('stroke-opacity','0');
        jQuery("#discontentMeter").attr('stroke-opacity','0');
        jQuery("#envyMeter").attr('stroke-opacity','0');
        jQuery("#sadMeter").attr('stroke-opacity','0');
        jQuery("#anxietyMeter").attr('stroke-opacity','0');
        jQuery("#lonelinessMeter").attr('stroke-opacity','0');
        
        jQuery("#angerMeter").attr('r','10%');
        jQuery("#guiltMeter").attr('r','10%');
        jQuery("#discontentMeter").attr('r','10%');
        jQuery("#envyMeter").attr('r','10%');
        jQuery("#sadMeter").attr('r','10%');
        jQuery("#anxietyMeter").attr('r','10%');
        jQuery("#lonelinessMeter").attr('r','10%');
        
        jQuery(this).attr('stroke-opacity','1');
        //jQuery(this).attr('r','12%');
        if(tit=="angerMeter"){
        jQuery("#angerMeter").attr('cx','50%'); jQuery("#angerMeter").attr('cy','15%');
        jQuery("#guiltMeter").attr('cx','78%'); jQuery("#guiltMeter").attr('cy','28%');
        jQuery("#discontentMeter").attr('cx','85%'); jQuery("#discontentMeter").attr('cy','55%');
        jQuery("#envyMeter").attr('cx','68%'); jQuery("#envyMeter").attr('cy','79%');
        jQuery("#sadMeter").attr('cx','34%'); jQuery("#sadMeter").attr('cy','79%');
        jQuery("#anxietyMeter").attr('cx','15%'); jQuery("#anxietyMeter").attr('cy','55%');
        jQuery("#lonelinessMeter").attr('cx','22%'); jQuery("#lonelinessMeter").attr('cy','28%');
        jQuery(".angerMeter").attr('x','50%'); jQuery(".angerMeter").attr('y','15%');
        jQuery(".guiltMeter").attr('x','78%'); jQuery(".guiltMeter").attr('y','28%');
        jQuery(".discontentMeter").attr('x','85%'); jQuery(".discontentMeter").attr('y','55%');
        jQuery(".envyMeter").attr('x','68%'); jQuery(".envyMeter").attr('y','79%');
        jQuery(".sadMeter").attr('x','34%'); jQuery(".sadMeter").attr('y','79%');
        jQuery(".anxietyMeter").attr('x','15%'); jQuery(".anxietyMeter").attr('y','55%');
        jQuery(".lonelinessMeter").attr('x','22%'); jQuery(".lonelinessMeter").attr('y','28%');
        }
        if(tit=="guiltMeter"){
        jQuery("#angerMeter").attr('cx','22%'); jQuery("#angerMeter").attr('cy','28%');
        jQuery("#guiltMeter").attr('cx','50%'); jQuery("#guiltMeter").attr('cy','15%');
        jQuery("#discontentMeter").attr('cx','78%'); jQuery("#discontentMeter").attr('cy','28%');
        jQuery("#envyMeter").attr('cx','85%'); jQuery("#envyMeter").attr('cy','55%');
        jQuery("#sadMeter").attr('cx','68%'); jQuery("#sadMeter").attr('cy','79%');
        jQuery("#anxietyMeter").attr('cx','34%'); jQuery("#anxietyMeter").attr('cy','79%');
        jQuery("#lonelinessMeter").attr('cx','15%'); jQuery("#lonelinessMeter").attr('cy','55%');
        jQuery(".angerMeter").attr('x','22%'); jQuery(".angerMeter").attr('y','28%');
        jQuery(".guiltMeter").attr('x','50%'); jQuery(".guiltMeter").attr('y','15%');
        jQuery(".discontentMeter").attr('x','78%'); jQuery(".discontentMeter").attr('y','28%');
        jQuery(".envyMeter").attr('x','85%'); jQuery(".envyMeter").attr('y','55%');
        jQuery(".sadMeter").attr('x','68%'); jQuery(".sadMeter").attr('y','79%');
        jQuery(".anxietyMeter").attr('x','34%'); jQuery(".anxietyMeter").attr('y','79%');
        jQuery(".lonelinessMeter").attr('x','15%'); jQuery(".lonelinessMeter").attr('y','55%');
        
        }
        if(tit=="discontentMeter"){
          jQuery("#angerMeter").attr('cx','15%'); jQuery("#angerMeter").attr('cy','55%');
        jQuery("#guiltMeter").attr('cx','22%'); jQuery("#guiltMeter").attr('cy','28%');
        jQuery("#discontentMeter").attr('cx','50%'); jQuery("#discontentMeter").attr('cy','15%');
        jQuery("#envyMeter").attr('cx','78%'); jQuery("#envyMeter").attr('cy','28%');
        jQuery("#sadMeter").attr('cx','85%'); jQuery("#sadMeter").attr('cy','55%');
        jQuery("#anxietyMeter").attr('cx','68%'); jQuery("#anxietyMeter").attr('cy','79%');
        jQuery("#lonelinessMeter").attr('cx','34%'); jQuery("#lonelinessMeter").attr('cy','79%');
        jQuery(".angerMeter").attr('x','15%'); jQuery(".angerMeter").attr('y','55%');
        jQuery(".guiltMeter").attr('x','22%'); jQuery(".guiltMeter").attr('y','28%');
        jQuery(".discontentMeter").attr('x','50%'); jQuery(".discontentMeter").attr('y','15%');
        jQuery(".envyMeter").attr('x','78%'); jQuery(".envyMeter").attr('y','28%');
        jQuery(".sadMeter").attr('x','85%'); jQuery(".sadMeter").attr('y','55%');
        jQuery(".anxietyMeter").attr('x','68%'); jQuery(".anxietyMeter").attr('y','79%');
        jQuery(".lonelinessMeter").attr('x','34%'); jQuery(".lonelinessMeter").attr('y','79%');
          
          }
        if(tit=="envyMeter"){
          jQuery("#angerMeter").attr('cx','34%'); jQuery("#angerMeter").attr('cy','79%');
        jQuery("#guiltMeter").attr('cx','15%'); jQuery("#guiltMeter").attr('cy','55%');
        jQuery("#discontentMeter").attr('cx','22%'); jQuery("#discontentMeter").attr('cy','28%');
        jQuery("#envyMeter").attr('cx','50%'); jQuery("#envyMeter").attr('cy','15%');
        jQuery("#sadMeter").attr('cx','78%'); jQuery("#sadMeter").attr('cy','28%');
        jQuery("#anxietyMeter").attr('cx','85%'); jQuery("#anxietyMeter").attr('cy','55%');
        jQuery("#lonelinessMeter").attr('cx','68%'); jQuery("#lonelinessMeter").attr('cy','79%');
        jQuery(".angerMeter").attr('x','34%'); jQuery(".angerMeter").attr('y','79%');
        jQuery(".guiltMeter").attr('x','15%'); jQuery(".guiltMeter").attr('y','55%');
        jQuery(".discontentMeter").attr('x','22%'); jQuery(".discontentMeter").attr('y','28%');
        jQuery(".envyMeter").attr('x','50%'); jQuery(".envyMeter").attr('y','15%');
        jQuery(".sadMeter").attr('x','78%'); jQuery(".sadMeter").attr('y','28%');
        jQuery(".anxietyMeter").attr('x','85%'); jQuery(".anxietyMeter").attr('y','55%');
        jQuery(".lonelinessMeter").attr('x','68%'); jQuery(".lonelinessMeter").attr('y','79%');
          }
        if(tit=="sadMeter"){
          jQuery("#angerMeter").attr('cx','68%'); jQuery("#angerMeter").attr('cy','79%');
        jQuery("#guiltMeter").attr('cx','34%'); jQuery("#guiltMeter").attr('cy','79%');
        jQuery("#discontentMeter").attr('cx','15%'); jQuery("#discontentMeter").attr('cy','55%');
        jQuery("#envyMeter").attr('cx','22%'); jQuery("#envyMeter").attr('cy','28%');
        jQuery("#sadMeter").attr('cx','50%'); jQuery("#sadMeter").attr('cy','15%');
        jQuery("#anxietyMeter").attr('cx','78%'); jQuery("#anxietyMeter").attr('cy','28%');
        jQuery("#lonelinessMeter").attr('cx','85%'); jQuery("#lonelinessMeter").attr('cy','55%');
        jQuery(".angerMeter").attr('x','68%'); jQuery(".angerMeter").attr('y','79%');
        jQuery(".guiltMeter").attr('x','34%'); jQuery(".guiltMeter").attr('y','79%');
        jQuery(".discontentMeter").attr('x','15%'); jQuery(".discontentMeter").attr('y','55%');
        jQuery(".envyMeter").attr('x','22%'); jQuery(".envyMeter").attr('y','28%');
        jQuery(".sadMeter").attr('x','50%'); jQuery(".sadMeter").attr('y','15%');
        jQuery(".anxietyMeter").attr('x','78%'); jQuery(".anxietyMeter").attr('y','28%');
        jQuery(".lonelinessMeter").attr('x','85%'); jQuery(".lonelinessMeter").attr('y','55%');
          
          }
        if(tit=="anxietyMeter"){
          jQuery("#angerMeter").attr('cx','85%'); jQuery("#angerMeter").attr('cy','55%');
        jQuery("#guiltMeter").attr('cx','68%'); jQuery("#guiltMeter").attr('cy','79%');
        jQuery("#discontentMeter").attr('cx','34%'); jQuery("#discontentMeter").attr('cy','79%');
        jQuery("#envyMeter").attr('cx','15%'); jQuery("#envyMeter").attr('cy','55%');
        jQuery("#sadMeter").attr('cx','22%'); jQuery("#sadMeter").attr('cy','28%');
        jQuery("#anxietyMeter").attr('cx','50%'); jQuery("#anxietyMeter").attr('cy','15%');
        jQuery("#lonelinessMeter").attr('cx','78%'); jQuery("#lonelinessMeter").attr('cy','28%');
        jQuery(".angerMeter").attr('x','85%'); jQuery(".angerMeter").attr('y','55%');
        jQuery(".guiltMeter").attr('x','68%'); jQuery(".guiltMeter").attr('y','79%');
        jQuery(".discontentMeter").attr('x','34%'); jQuery(".discontentMeter").attr('y','79%');
        jQuery(".envyMeter").attr('x','15%'); jQuery(".envyMeter").attr('y','55%');
        jQuery(".sadMeter").attr('x','22%'); jQuery(".sadMeter").attr('y','28%');
        jQuery(".anxietyMeter").attr('x','50%'); jQuery(".anxietyMeter").attr('y','15%');
        jQuery(".lonelinessMeter").attr('x','78%'); jQuery(".lonelinessMeter").attr('y','28%');
          }
        if(tit=="lonelinessMeter"){
          
          jQuery("#angerMeter").attr('cx','78%'); jQuery("#angerMeter").attr('cy','28%');
        jQuery("#guiltMeter").attr('cx','85%'); jQuery("#guiltMeter").attr('cy','55%');
        jQuery("#discontentMeter").attr('cx','68%'); jQuery("#discontentMeter").attr('cy','79%');
        jQuery("#envyMeter").attr('cx','34%'); jQuery("#envyMeter").attr('cy','79%');
        jQuery("#sadMeter").attr('cx','15%'); jQuery("#sadMeter").attr('cy','55%');
        jQuery("#anxietyMeter").attr('cx','22%'); jQuery("#anxietyMeter").attr('cy','28%');
        jQuery("#lonelinessMeter").attr('cx','50%'); jQuery("#lonelinessMeter").attr('cy','15%');
        jQuery(".angerMeter").attr('x','78%'); jQuery(".angerMeter").attr('y','28%');
        jQuery(".guiltMeter").attr('x','85%'); jQuery(".guiltMeter").attr('y','55%');
        jQuery(".discontentMeter").attr('x','68%'); jQuery(".discontentMeter").attr('y','79%');
        jQuery(".envyMeter").attr('x','34%'); jQuery(".envyMeter").attr('y','79%');
        jQuery(".sadMeter").attr('x','15%'); jQuery(".sadMeter").attr('y','55%');
        jQuery(".anxietyMeter").attr('x','22%'); jQuery(".anxietyMeter").attr('y','28%');
        jQuery(".lonelinessMeter").attr('x','50%'); jQuery(".lonelinessMeter").attr('y','15%');
          
          }
        
      });	
      
    jQuery("#ccircle text").click(function(){	
    
        jQuery(".meterTabsContent").css("display","none");
        var tit = jQuery(this).attr("class");
        jQuery("#" + tit+"Tabs").css("display","block");
        jQuery("#angerMeter").attr('stroke-opacity','0');
        jQuery("#guiltMeter").attr('stroke-opacity','0');
        jQuery("#discontentMeter").attr('stroke-opacity','0');
        jQuery("#envyMeter").attr('stroke-opacity','0');
        jQuery("#sadMeter").attr('stroke-opacity','0');
        jQuery("#anxietyMeter").attr('stroke-opacity','0');
        jQuery("#lonelinessMeter").attr('stroke-opacity','0');
        
        jQuery("#angerMeter").attr('r','10%');
        jQuery("#guiltMeter").attr('r','10%');
        jQuery("#discontentMeter").attr('r','10%');
        jQuery("#envyMeter").attr('r','10%');
        jQuery("#sadMeter").attr('r','10%');
        jQuery("#anxietyMeter").attr('r','10%');
        jQuery("#lonelinessMeter").attr('r','10%');
        
        if(tit=="angerMeter"){jQuery("#angerMeter").attr('stroke-opacity','1');}
        if(tit=="guiltMeter"){jQuery("#guiltMeter").attr('stroke-opacity','1');}
        if(tit=="discontentMeter"){jQuery("#discontentMeter").attr('stroke-opacity','1');}
        if(tit=="envyMeter"){jQuery("#envyMeter").attr('stroke-opacity','1');}
        if(tit=="sadMeter"){jQuery("#sadMeter").attr('stroke-opacity','1');}
        if(tit=="anxietyMeter"){jQuery("#anxietyMeter").attr('stroke-opacity','1');}
        if(tit=="lonelinessMeter"){jQuery("#lonelinessMeter").attr('stroke-opacity','1'); }
    
        
            if(tit=="angerMeter"){ jQuery("#angerMeter").attr('stroke-opacity','1'); jQuery("#angerMeter").attr('r','12%');
        jQuery("#angerMeter").attr('cx','50%'); jQuery("#angerMeter").attr('cy','15%');
        jQuery("#guiltMeter").attr('cx','78%'); jQuery("#guiltMeter").attr('cy','28%');
        jQuery("#discontentMeter").attr('cx','85%'); jQuery("#discontentMeter").attr('cy','55%');
        jQuery("#envyMeter").attr('cx','68%'); jQuery("#envyMeter").attr('cy','79%');
        jQuery("#sadMeter").attr('cx','34%'); jQuery("#sadMeter").attr('cy','79%');
        jQuery("#anxietyMeter").attr('cx','15%'); jQuery("#anxietyMeter").attr('cy','55%');
        jQuery("#lonelinessMeter").attr('cx','22%'); jQuery("#lonelinessMeter").attr('cy','28%');
        jQuery(".angerMeter").attr('x','50%'); jQuery(".angerMeter").attr('y','15%');
        jQuery(".guiltMeter").attr('x','78%'); jQuery(".guiltMeter").attr('y','28%');
        jQuery(".discontentMeter").attr('x','85%'); jQuery(".discontentMeter").attr('y','55%');
        jQuery(".envyMeter").attr('x','68%'); jQuery(".envyMeter").attr('y','79%');
        jQuery(".sadMeter").attr('x','34%'); jQuery(".sadMeter").attr('y','79%');
        jQuery(".anxietyMeter").attr('x','15%'); jQuery(".anxietyMeter").attr('y','55%');
        jQuery(".lonelinessMeter").attr('x','22%'); jQuery(".lonelinessMeter").attr('y','28%');
        }
        if(tit=="guiltMeter"){ jQuery("#guiltMeter").attr('stroke-opacity','1'); jQuery("#guiltMeter").attr('r','12%');
        jQuery("#angerMeter").attr('cx','22%'); jQuery("#angerMeter").attr('cy','28%');
        jQuery("#guiltMeter").attr('cx','50%'); jQuery("#guiltMeter").attr('cy','15%');
        jQuery("#discontentMeter").attr('cx','78%'); jQuery("#discontentMeter").attr('cy','28%');
        jQuery("#envyMeter").attr('cx','85%'); jQuery("#envyMeter").attr('cy','55%');
        jQuery("#sadMeter").attr('cx','68%'); jQuery("#sadMeter").attr('cy','79%');
        jQuery("#anxietyMeter").attr('cx','34%'); jQuery("#anxietyMeter").attr('cy','79%');
        jQuery("#lonelinessMeter").attr('cx','15%'); jQuery("#lonelinessMeter").attr('cy','55%');
        jQuery(".angerMeter").attr('x','22%'); jQuery(".angerMeter").attr('y','28%');
        jQuery(".guiltMeter").attr('x','50%'); jQuery(".guiltMeter").attr('y','15%');
        jQuery(".discontentMeter").attr('x','78%'); jQuery(".discontentMeter").attr('y','28%');
        jQuery(".envyMeter").attr('x','85%'); jQuery(".envyMeter").attr('y','55%');
        jQuery(".sadMeter").attr('x','68%'); jQuery(".sadMeter").attr('y','79%');
        jQuery(".anxietyMeter").attr('x','34%'); jQuery(".anxietyMeter").attr('y','79%');
        jQuery(".lonelinessMeter").attr('x','15%'); jQuery(".lonelinessMeter").attr('y','55%');
        
        }
        if(tit=="discontentMeter"){ jQuery("#discontentMeter").attr('stroke-opacity','1'); jQuery("#discontentMeter").attr('r','12%');
          jQuery("#angerMeter").attr('cx','15%'); jQuery("#angerMeter").attr('cy','55%');
        jQuery("#guiltMeter").attr('cx','22%'); jQuery("#guiltMeter").attr('cy','28%');
        jQuery("#discontentMeter").attr('cx','50%'); jQuery("#discontentMeter").attr('cy','15%');
        jQuery("#envyMeter").attr('cx','78%'); jQuery("#envyMeter").attr('cy','28%');
        jQuery("#sadMeter").attr('cx','85%'); jQuery("#sadMeter").attr('cy','55%');
        jQuery("#anxietyMeter").attr('cx','68%'); jQuery("#anxietyMeter").attr('cy','79%');
        jQuery("#lonelinessMeter").attr('cx','34%'); jQuery("#lonelinessMeter").attr('cy','79%');
        jQuery(".angerMeter").attr('x','15%'); jQuery(".angerMeter").attr('y','55%');
        jQuery(".guiltMeter").attr('x','22%'); jQuery(".guiltMeter").attr('y','28%');
        jQuery(".discontentMeter").attr('x','50%'); jQuery(".discontentMeter").attr('y','15%');
        jQuery(".envyMeter").attr('x','78%'); jQuery(".envyMeter").attr('y','28%');
        jQuery(".sadMeter").attr('x','85%'); jQuery(".sadMeter").attr('y','55%');
        jQuery(".anxietyMeter").attr('x','68%'); jQuery(".anxietyMeter").attr('y','79%');
        jQuery(".lonelinessMeter").attr('x','34%'); jQuery(".lonelinessMeter").attr('y','79%');
          
          }
        if(tit=="envyMeter"){ jQuery("#envyMeter").attr('stroke-opacity','1'); jQuery("#envyMeter").attr('r','12%');
          jQuery("#angerMeter").attr('cx','34%'); jQuery("#angerMeter").attr('cy','79%');
        jQuery("#guiltMeter").attr('cx','15%'); jQuery("#guiltMeter").attr('cy','55%');
        jQuery("#discontentMeter").attr('cx','22%'); jQuery("#discontentMeter").attr('cy','28%');
        jQuery("#envyMeter").attr('cx','50%'); jQuery("#envyMeter").attr('cy','15%');
        jQuery("#sadMeter").attr('cx','78%'); jQuery("#sadMeter").attr('cy','28%');
        jQuery("#anxietyMeter").attr('cx','85%'); jQuery("#anxietyMeter").attr('cy','55%');
        jQuery("#lonelinessMeter").attr('cx','68%'); jQuery("#lonelinessMeter").attr('cy','79%');
        jQuery(".angerMeter").attr('x','34%'); jQuery(".angerMeter").attr('y','79%');
        jQuery(".guiltMeter").attr('x','15%'); jQuery(".guiltMeter").attr('y','55%');
        jQuery(".discontentMeter").attr('x','22%'); jQuery(".discontentMeter").attr('y','28%');
        jQuery(".envyMeter").attr('x','50%'); jQuery(".envyMeter").attr('y','15%');
        jQuery(".sadMeter").attr('x','78%'); jQuery(".sadMeter").attr('y','28%');
        jQuery(".anxietyMeter").attr('x','85%'); jQuery(".anxietyMeter").attr('y','55%');
        jQuery(".lonelinessMeter").attr('x','68%'); jQuery(".lonelinessMeter").attr('y','79%');
          }
        if(tit=="sadMeter"){ jQuery("#sadMeter").attr('stroke-opacity','1');  jQuery("#sadMeter").attr('r','12%');
          jQuery("#angerMeter").attr('cx','68%'); jQuery("#angerMeter").attr('cy','79%');
        jQuery("#guiltMeter").attr('cx','34%'); jQuery("#guiltMeter").attr('cy','79%');
        jQuery("#discontentMeter").attr('cx','15%'); jQuery("#discontentMeter").attr('cy','55%');
        jQuery("#envyMeter").attr('cx','22%'); jQuery("#envyMeter").attr('cy','28%');
        jQuery("#sadMeter").attr('cx','50%'); jQuery("#sadMeter").attr('cy','15%');
        jQuery("#anxietyMeter").attr('cx','78%'); jQuery("#anxietyMeter").attr('cy','28%');
        jQuery("#lonelinessMeter").attr('cx','85%'); jQuery("#lonelinessMeter").attr('cy','55%');
        jQuery(".angerMeter").attr('x','68%'); jQuery(".angerMeter").attr('y','79%');
        jQuery(".guiltMeter").attr('x','34%'); jQuery(".guiltMeter").attr('y','79%');
        jQuery(".discontentMeter").attr('x','15%'); jQuery(".discontentMeter").attr('y','55%');
        jQuery(".envyMeter").attr('x','22%'); jQuery(".envyMeter").attr('y','28%');
        jQuery(".sadMeter").attr('x','50%'); jQuery(".sadMeter").attr('y','15%');
        jQuery(".anxietyMeter").attr('x','78%'); jQuery(".anxietyMeter").attr('y','28%');
        jQuery(".lonelinessMeter").attr('x','85%'); jQuery(".lonelinessMeter").attr('y','55%');
          
          }
        if(tit=="anxietyMeter"){ jQuery("#anxietyMeter").attr('stroke-opacity','1');  jQuery("#anxietyMeter").attr('r','12%');
          jQuery("#angerMeter").attr('cx','85%'); jQuery("#angerMeter").attr('cy','55%');
        jQuery("#guiltMeter").attr('cx','68%'); jQuery("#guiltMeter").attr('cy','79%');
        jQuery("#discontentMeter").attr('cx','34%'); jQuery("#discontentMeter").attr('cy','79%');
        jQuery("#envyMeter").attr('cx','15%'); jQuery("#envyMeter").attr('cy','55%');
        jQuery("#sadMeter").attr('cx','22%'); jQuery("#sadMeter").attr('cy','28%');
        jQuery("#anxietyMeter").attr('cx','50%'); jQuery("#anxietyMeter").attr('cy','15%');
        jQuery("#lonelinessMeter").attr('cx','78%'); jQuery("#lonelinessMeter").attr('cy','28%');
        jQuery(".angerMeter").attr('x','85%'); jQuery(".angerMeter").attr('y','55%');
        jQuery(".guiltMeter").attr('x','68%'); jQuery(".guiltMeter").attr('y','79%');
        jQuery(".discontentMeter").attr('x','34%'); jQuery(".discontentMeter").attr('y','79%');
        jQuery(".envyMeter").attr('x','15%'); jQuery(".envyMeter").attr('y','55%');
        jQuery(".sadMeter").attr('x','22%'); jQuery(".sadMeter").attr('y','28%');
        jQuery(".anxietyMeter").attr('x','50%'); jQuery(".anxietyMeter").attr('y','15%');
        jQuery(".lonelinessMeter").attr('x','78%'); jQuery(".lonelinessMeter").attr('y','28%');
          }
        if(tit=="lonelinessMeter"){ jQuery("#lonelinessMeter").attr('stroke-opacity','1'); jQuery("#lonelinessMeter").attr('r','12%');
          
          jQuery("#angerMeter").attr('cx','78%'); jQuery("#angerMeter").attr('cy','28%');
        jQuery("#guiltMeter").attr('cx','85%'); jQuery("#guiltMeter").attr('cy','55%');
        jQuery("#discontentMeter").attr('cx','68%'); jQuery("#discontentMeter").attr('cy','79%');
        jQuery("#envyMeter").attr('cx','34%'); jQuery("#envyMeter").attr('cy','79%');
        jQuery("#sadMeter").attr('cx','15%'); jQuery("#sadMeter").attr('cy','55%');
        jQuery("#anxietyMeter").attr('cx','22%'); jQuery("#anxietyMeter").attr('cy','28%');
        jQuery("#lonelinessMeter").attr('cx','50%'); jQuery("#lonelinessMeter").attr('cy','15%');
        jQuery(".angerMeter").attr('x','78%'); jQuery(".angerMeter").attr('y','28%');
        jQuery(".guiltMeter").attr('x','85%'); jQuery(".guiltMeter").attr('y','55%');
        jQuery(".discontentMeter").attr('x','68%'); jQuery(".discontentMeter").attr('y','79%');
        jQuery(".envyMeter").attr('x','34%'); jQuery(".envyMeter").attr('y','79%');
        jQuery(".sadMeter").attr('x','15%'); jQuery(".sadMeter").attr('y','55%');
        jQuery(".anxietyMeter").attr('x','22%'); jQuery(".anxietyMeter").attr('y','28%');
        jQuery(".lonelinessMeter").attr('x','50%'); jQuery(".lonelinessMeter").attr('y','15%');
          
          }
        
    
      });			
    
    
      
      
    jQuery('.closeBtn').click(function() {	
      
      jQuery(this).parent().css('display','none');
      
      });	
    
    jQuery('.closePopup').click(function() {	
      
      jQuery(this).parent().css('display','none');
      
      });		
      
    jQuery('#sleepHours').change(function() {
      jQuery(".swp").css('display','none');
        if (this.value == "1") {		
        jQuery(".sleepWarnPopup").css('display','block');
        jQuery("#swp1").css('display','block');
        }
      if (this.value == "2") {
        jQuery(".sleepWarnPopup").css('display','block');
        jQuery("#swp2").css('display','block');
        }
      if (this.value == "3") {
        jQuery(".sleepWarnPopup").css('display','block');
        jQuery("#swp3").css('display','block');
        }
    });	
      
      
    
      
        
    /***************************************************************************************/
     
    
    (function(jQuery) {
        jQuery.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = jQuery(this).data();
                var tc = data.toggleclicked;
                jQuery.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    
    
    /***************************************************************************************/
    
     jQuery('.readToggle').clickToggle(function() {  
     
        jQuery(this).next(".readMatter").css("display","block");
      jQuery(this).children('.readIcon').css("opacity","0");
      jQuery(this).children('i').css("opacity","1");		
    },
    function() {
        jQuery(this).next(".readMatter").css("display","none");
      jQuery(this).children('.readIcon').css("opacity","1");
      jQuery(this).children('i').css("opacity","0");	
    });
    
    
    /***************************************************************************************/
    
     jQuery('.deepDive').clickToggle(function() {   
        jQuery(this).prev(".readMatterInr").css("height","auto");
    },
    function() {
        jQuery(this).prev(".readMatterInr").css("height","385px");
    });
    
    
    /***************************************************************************************/
    
    jQuery(document).mouseup(function(e) 
    {
        var container = jQuery(".summaryPopup");
    
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
        }
      
      var container = jQuery(".abtSummaryPopup");
    
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
        }
      
    });



      });
    });
  }


  
  	
  /**
   * ngOnInit
   */
  ngOnInit() {}




  /**
   * Check for user authentication. If no user is logged in then just logout
   */
  async checkAuthentication() {
    this.authService.getObject("session_user").then((sess) => {
        if(sess) {
          sess = JSON.parse(JSON.stringify(sess));
          if(sess.user_id == '' || sess.user_id == null  || sess.token == '' || sess.token == null) {
            this.authService.logout();
          }
        }
    });
  }



  

  /**
   * Go to the corresponding page based on the menu option was clicked
   * @param page 
   */
  /* goHome() {
    this.router.navigateByUrl('/home');
    //this.dataServ.show_home = true;
    //console.log(this.dataServ.show_home);
  } */





  /**
   * Open / Close incrisis popup
   * @param action 
   */
  crisis(action) {
    if(action == "show") this.is_incrisis = true;
    else if(action == "hide") this.is_incrisis = false;
  }




  /**
   * Open / Close sidemanu bar
   * @param action 
   */
  sideMenu(action) {
    if(action == "close") this.is_sidemenu = false;
    else if(action == "open") this.is_sidemenu = true;
  }



  refreshPage() {
    //this.ionViewWillEnter();
    this.navCtrl.navigateRoot('/home');
  }


  goto(url) {
    this.is_sidemenu = false;
    this.router.navigateByUrl(url);
  }
}
