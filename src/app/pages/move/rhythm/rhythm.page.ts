import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.page.html',
  styleUrls: ['./rhythm.page.scss'],
})
export class RhythmPage implements OnInit {
  showBanner = true;
  showVideo = false;
  constructor() { }

  ngOnInit() {
  }
  playVideo() {
    this.showBanner = false;
    this.showVideo = true;
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
