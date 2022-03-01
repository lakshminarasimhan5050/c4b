import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({

  selector: 'app-debrief-modal',
  templateUrl: './debrief-modal.page.html',
  styleUrls: ['./debrief-modal.page.scss'],
})
export class DebriefModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    console.log("hello");
    
  this.modalController.dismiss({
    'dismissed': true
  });
  }
  onheight(){
    document.getElementById("deepDive").style.display = "none";
    document.getElementById("dive").style.display = "block";
    document.getElementById("readMatterInr").style.height = "600px";
    
  }
  ofheight(){
    document.getElementById("deepDive").style.display = "block";
    document.getElementById("dive").style.display = "none";
    document.getElementById("readMatterInr").style.height = "380px";
   
  }

}

