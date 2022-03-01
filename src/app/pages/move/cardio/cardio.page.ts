import { Component, OnInit } from '@angular/core';
import { ContainerWithIframeInfo } from "../../../models/container-with-iframe";

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {
  public containerInfo: ContainerWithIframeInfo = new ContainerWithIframeInfo();
  constructor() { }


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

  ngOnInit() {
    this.containerInfo.header = 'cardio - 1';
    this.containerInfo.iframe_src = 'https://www.youtube.com/embed/y5IfmnqI2lE';
    this.containerInfo.iframe_title = 'YouTube video player';
    this.containerInfo.content = `<p>This is about level 1 cardio.</p>
    <p>This is about level 1 cardio.</p>
    <p>This is about level 1 cardio.</p>`;
    this.containerInfo.iframe_upper_img_src = '../../../../assets/images/Layer55.png';
    this.containerInfo.borderColorCode = "2px solid #ff6600";
    this.containerInfo.headerColorCode = "#ff6600";
    this.containerInfo.show_add_my_routine_btn = true;
  }
 
}
