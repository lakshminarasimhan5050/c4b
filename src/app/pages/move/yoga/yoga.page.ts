import { Component, OnInit } from '@angular/core';
import { ContainerWithIframeInfo } from "../../../models/container-with-iframe";

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.page.html',
  styleUrls: ['./yoga.page.scss'],
})
export class YogaPage implements OnInit {
  public containerInfo: ContainerWithIframeInfo = new ContainerWithIframeInfo();
  public showDetailsInfo: boolean = false;

  constructor() { }

  ngOnInit() {
    this.containerInfo.content = `<div class="readMatterInr">
    <h6>Welcome to Day Yoga <br /> Here you will learn:</h6>
    <p>About Day Yoga</p>
    <p>When an incident causes the brain to become emotionally hijacked, reactions are automatic and
      habitual. We will refer to these incidents as “Stimuli” or “Triggers”. <br /><br />
      By Resetting your Mindset, you can change your habits when incidents trigger unwanted behaviors or
      reactions. This reset gives you the power to choose a response with careful consideration of the
      consequence of your actions.
    </p>
  </div>`;
  }

  showDetails() {
    this.showDetailsInfo = (this.showDetailsInfo)? false: true;
  }

}
