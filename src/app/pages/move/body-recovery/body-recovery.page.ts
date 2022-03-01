import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-recovery',
  templateUrl: './body-recovery.page.html',
  styleUrls: ['./body-recovery.page.scss'],
})
export class BodyRecoveryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  playVideo() {
    document.getElementById("tFrame").style.display = "block";
    document.getElementById("tImage").style.display = "none";
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
