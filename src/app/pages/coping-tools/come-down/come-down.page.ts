import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-come-down',
  templateUrl: './come-down.page.html',
  styleUrls: ['./come-down.page.scss'],
})
export class ComeDownPage implements OnInit {

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
