import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.page.html',
  styleUrls: ['./rhythm.page.scss'],
})
export class RhythmPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    document.getElementById("tFrame").style.display = "block";
    document.getElementById("tImage").style.display = "none";
  }
}
