import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.page.html',
  styleUrls: ['./resistance.page.scss'],
})
export class ResistancePage implements OnInit {
  public content: string = `<div class="readMatterInr" id="readMatterInr">
  <br>
  <p>&nbsp;&nbsp;&nbsp;&nbsp; This is about level 1 Resistance.</p>
  <p>This is about level 1 Resistance.</p>
  <p>This is about level 1 Resistance.</p>



</div>

<div class="add2routine">
  <span class="emptyHeart"><img src="../../../../assets/images/move-heart.png" /></span>
  <p>Add to my routine</p>
</div>
<button class="deepDive yellow" id="deepDive" (click)="onheight()">Deeper Dive</button>
<button class="dive" id="dive" (click)="ofheight()">Dive Deeper</button>

</div>`;
  constructor() { }

  ngOnInit() {
  }
  playVideo() {
    document.getElementById("tFrame").style.display = "block";
    document.getElementById("tImage").style.display = "none";
  }
  onheight() {
    document.getElementById("deepDive").style.display = "none";
    document.getElementById("dive").style.display = "block";
    document.getElementById("readMatterInr").style.height = "auto";

  }
  ofheight() {
    document.getElementById("deepDive").style.display = "block";
    document.getElementById("dive").style.display = "none";
    document.getElementById("readMatterInr").style.height = "380px";
  }

}
