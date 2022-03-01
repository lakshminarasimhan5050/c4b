import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-time',
  templateUrl: './down-time.page.html',
  styleUrls: ['./down-time.page.scss'],
})
export class DownTimePage implements OnInit {

  constructor() { }

  ngOnInit() {
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
