import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-hypnosis',
  templateUrl: './self-hypnosis.page.html',
  styleUrls: ['./self-hypnosis.page.scss'],
})
export class SelfHypnosisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    document.getElementById("tFrame").style.display = "block";
    document.getElementById("tImage").style.display = "none";
  }
}
