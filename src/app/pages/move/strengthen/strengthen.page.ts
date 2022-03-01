import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-strengthen',
  templateUrl: './strengthen.page.html',
  styleUrls: ['./strengthen.page.scss'],
})
export class StrengthenPage implements OnInit {
  showVideo = true;
  showBanner = false;

  id = 'y5IfmnqI2lE';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
  player: YT.Player;
  public ytEvent;

  constructor(public  sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  playVideo() {
    this.showBanner = true;
    this.showVideo = false;
    this.player.playVideo();
   
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

 

  pauseVideo() {
    this.player.pauseVideo();
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
