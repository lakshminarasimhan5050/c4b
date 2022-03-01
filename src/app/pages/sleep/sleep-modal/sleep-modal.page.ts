import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-sleep-modal',
  templateUrl: './sleep-modal.page.html',
  styleUrls: ['./sleep-modal.page.scss'],
})
export class SleepModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async playvideo(){
    document.getElementById("tFrame").style.display="none";  
  
    
    var videos =await document.querySelectorAll('iframe,aboutvideo');
    // console.log(videos);
    await Array.prototype.forEach.call(videos, function (video, i) {
      console.log(i)
      console.log(video);
      console.log(video.src);
      if (i == (videos.length - 1)) {
        if (video.src.includes('?autoplay=1')) {

        } else {
          video.src += "?autoplay=1";
        }
       console.log(video);
      }
    });
  }

  
  closeModal(){
    console.log("hello");
    
  this.modalController.dismiss({
    // 'dismissed': true
  });
  }
  onheight(){
    document.getElementById("deepDive").style.display = "none";
    document.getElementById("dive").style.display = "block";
    document.getElementById("readMatterInr").style.height = "auto";
    
  }
  ofheight(){
    document.getElementById("deepDive").style.display = "block";
    document.getElementById("dive").style.display = "none";
    document.getElementById("readMatterInr").style.height = "380px";
   
  }
 

}
