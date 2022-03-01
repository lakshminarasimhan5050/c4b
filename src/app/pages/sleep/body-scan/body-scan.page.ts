import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerWithIframeInfo } from "../../../models/container-with-iframe";
@Component({
  selector: 'app-body-scan',
  templateUrl: './body-scan.page.html',
  styleUrls: ['./body-scan.page.scss'],
})
export class BodyScanPage implements OnInit {
  public containerInfo: ContainerWithIframeInfo = new ContainerWithIframeInfo();

  constructor(private router: Router) { }

  ngOnInit() {
    this.containerInfo.header = 'GUIDED BODY SCAN';
    this.containerInfo.iframe_src = 'https://www.youtube.com/embed/y5IfmnqI2lE';
    this.containerInfo.iframe_title = 'YouTube video player';
    this.containerInfo.content = `<p>This is about guided body scan. Here you will find out about guided body scan. This is about guided body scan. Here you will find out about guided body scan.</p>`;
    this.containerInfo.iframe_upper_img_src = '../../../../assets/images/sm-guided-body-scan.png';
    this.containerInfo.borderColorCode = "2px solid #50a7db";
    this.containerInfo.headerColorCode = "#50a7db";
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  
}
