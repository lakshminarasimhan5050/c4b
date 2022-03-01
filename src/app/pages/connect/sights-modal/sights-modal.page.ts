import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-sights-modal',
  templateUrl: './sights-modal.page.html',
  styleUrls: ['./sights-modal.page.scss'],
})
export class SightsModalPage implements OnInit {

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
    document.getElementById("readMatterInr").style.height = "auto";
    
  }
  ofheight(){
    document.getElementById("deepDive").style.display = "block";
    document.getElementById("dive").style.display = "none";
    document.getElementById("readMatterInr").style.height = "380px";
   
  }

}
