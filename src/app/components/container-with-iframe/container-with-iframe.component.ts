import { Component, OnInit, Input, Output, ViewChild, ElementRef, AfterViewInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { ContainerWithIframeInfo } from "../../models/container-with-iframe";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-container-with-iframe',
  templateUrl: './container-with-iframe.component.html',
  styleUrls: ['./container-with-iframe.component.scss'],
})
export class ContainerWithIframeComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('mainContext', {static: false}) mainContext: ElementRef;
  @Input('ContainerInfo') containerInfo: ContainerWithIframeInfo= new ContainerWithIframeInfo();
  @Input('IsCollapsibled') isCollapsibled: boolean = false;
  public contextHight: number = 0;
  public diveDeeperTxt = "Dive Deeper";
  public hideDiveDeeperBtn: boolean = false;
  safeSrc: SafeResourceUrl;
  constructor(public renderer: Renderer2, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isCollapsibled !== undefined) {
      setTimeout(() => {
        this.contextHight = this.mainContext.nativeElement.offsetHeight;
        if (this.contextHight > 200) {
          this.renderer.setStyle(this.mainContext.nativeElement, "height", "200px");
          this.hideDiveDeeperBtn = !changes.isCollapsibled.currentValue;
        }
      }, 100);
      if (this.mainContext!== undefined && changes.isCollapsibled.currentValue === false) {
        this.renderer.setStyle(this.mainContext.nativeElement, "height", `${this.contextHight}px`);
      }
    }
  }

  ngOnInit() { 
    console.log(this.containerInfo)
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.containerInfo.iframe_src);
    document.getElementById("vFrame").style.display = "none";

  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      this.contextHight = this.mainContext.nativeElement.offsetHeight;
      if (this.contextHight > 200) {
        this.renderer.setStyle(this.mainContext.nativeElement, "height", "200px");
      } else this.hideDiveDeeperBtn = true;
    }, 100);
  }

  playVideo() {
    document.getElementById("tFrame").style.display = "none";
    document.getElementById("vFrame").style.display = "block";

  }

  diveDeeper() {
    this.diveDeeperTxt = "Deeper Dive";
    if (this.mainContext.nativeElement.offsetHeight < this.contextHight && (this.contextHight - this.mainContext.nativeElement.offsetHeight) > 200) {
      let height =  this.mainContext.nativeElement.offsetHeight + 200;
      this.renderer.setStyle(this.mainContext.nativeElement, "height", `${height}px`);
    } else if ((this.contextHight - this.mainContext.nativeElement.offsetHeight) < 200 && (this.contextHight - this.mainContext.nativeElement.offsetHeight) > 0) {
      this.renderer.setStyle(this.mainContext.nativeElement, "height", `${this.contextHight + 10}px`);
      this.hideDiveDeeperBtn = true;
    }
  }

}
