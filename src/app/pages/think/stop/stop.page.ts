import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { ModalController } from "@ionic/angular";
import { StopModalPage } from "../stop-modal/stop-modal.page";
declare var $;

import { timer } from "rxjs";
import { map, tap, take } from "rxjs/operators";

@Component({
  selector: "app-stop",
  templateUrl: "./stop.page.html",
  styleUrls: ["./stop.page.scss"],
})
export class StopPage implements OnInit {
  period = 4000;
  box = [
    { scale: "4", text: "in" },
    { scale: "4", text: "hold" },
    { scale: "4", text: "out" },
  ];
  interval = null;
  count_no = "";
  actionTitle = "";
  ran = 0;

  constructor(
    private platform: Platform,
    private router: Router,
    private authService: AuthService,
    public modalController: ModalController
  ) {}

  ionViewWillLeave() {
    console.log("I am about to leave");
    this.stopClock();
  }

  ngOnInit(): void {
    this.stopClock();
  }

  ionViewWillEnter() {
    $("#counterValueStart").css("display", "block");
    $("#counterValueStop").css("display", "none");
    clearTimeout(this.interval);
    $("#c7").attr("stroke-opacity", "0.3");
    $("#c6").attr("stroke-opacity", "0.3");
    $("#c5").attr("stroke-opacity", "0.3");
    $("#c4").attr("stroke-opacity", "0.3");
    this.count_no = "";
    console.log("hello");
  }

  start() {
    this.main();
    $("#counterValueStart").css("display", "none");
    $("#counterValueStop").css("display", "block");
  }

  stopClock() {
    clearTimeout(this.interval);
    $("#counterValueStart").css("display", "block");
    $("#counterValueStop").css("display", "none");

    $("#c7").attr("stroke-opacity", "0.3");
    $("#c6").attr("stroke-opacity", "0.3");
    $("#c5").attr("stroke-opacity", "0.3");
    $("#c4").attr("stroke-opacity", "0.3");
    this.count_no = "";
    $("#pushToStart").css("display", "block");
    this.actionTitle = "";
    this.ran = 0;
  }

  async run() {
    this.first("4");
    await this.time(1000);
    this.first("3");
    await this.time(1000);
    this.first("2");
    await this.time(1000);
    this.first("1");
    await this.time(1000);

    // second hold start

    this.secondHoldOn("4");
    await this.time(1000);
  

    this.secondHoldOn("3");
    await this.time(1000);
    

    this.secondHoldOn("2");
    await this.time(1000);
   

    this.secondHoldOn("1");
    await this.time(1000);
    

    this.third("4");
    await this.time(1000);
    this.third("3");
    await this.time(1000);
    this.third("2");
    await this.time(1000);
    this.third("1");
    await this.time(1000);

    this.secondHoldOff("4");
    await this.time(1000);

    this.secondHoldOff("3");
    await this.time(1000);
   
    this.secondHoldOff("2");
    await this.time(1000);
    

    this.secondHoldOff("1");
    await this.time(1000);
   
  }

  *make() {
    const times = 100;
    let rant= 0
    while (rant < times) {
      yield this.run();
      rant++;
      this.ran = rant;
      console.log(this.ran);
    }
  }

  time(milliseconds) {
    return new Promise<void>(
      (resolve) => (this.interval = setTimeout(() => resolve(), milliseconds))
    );
  }

  first(i) {
    this.actionTitle = "INHALE";
    this.count_no = i;
    $("#c7").attr("stroke-opacity", "0.3");
    $("#c6").attr("stroke-opacity", "0.3");
    $("#c5").attr("stroke-opacity", "0.3");
    $("#c4").attr("stroke-opacity", "0.3");
    $("#pushToStart").css("display", "none");
    if (i == "4") {
      $("#c4").attr("stroke-opacity", "1");
    }
    if (i == "3") {
      $("#c4").attr("stroke-opacity", "1");
      $("#c5").attr("stroke-opacity", "1");
    }
    if (i == "2") {
      $("#c4").attr("stroke-opacity", "1");
      $("#c5").attr("stroke-opacity", "1");
      $("#c6").attr("stroke-opacity", "1");
    }
    if (i == "1") {
      $("#c7").attr("stroke-opacity", "1");
      $("#c6").attr("stroke-opacity", "1");
      $("#c5").attr("stroke-opacity", "1");
      $("#c4").attr("stroke-opacity", "1");
    }
    console.log("first ran", i);
  }

  secondHoldOff(j) {
    this.actionTitle = "HOLD";
    this.count_no = j;
    $("#pushToStart").css("display", "none");
    $("#c7").attr("stroke-opacity", "0.3");
    $("#c6").attr("stroke-opacity", "0.3");
    $("#c5").attr("stroke-opacity", "0.3");
    $("#c4").attr("stroke-opacity", "0.3");

  
    if (j == "1" && this.ran == 9) {
      setTimeout(() => {
        this.actionTitle = "";
        this.count_no = "";
        this.ran = 0;
        $("#pushToStart").css("display", "block");
      }, 500);
    }
  }

  secondHoldOn(j) {
    this.actionTitle = "HOLD";
    this.count_no = j;
    $("#pushToStart").css("display", "none");
    $("#c7").attr("stroke-opacity", "1");
    $("#c6").attr("stroke-opacity", "1");
    $("#c5").attr("stroke-opacity", "1");
    $("#c4").attr("stroke-opacity", "1");
  }

  third(k) {
    this.actionTitle = "EXHALE";

   
    $("#c7").attr("stroke-opacity", "0.3");
    $("#c6").attr("stroke-opacity", "0.3");
    $("#c5").attr("stroke-opacity", "0.3");
    $("#c4").attr("stroke-opacity", "0.3");
    if (k == "4") {
      $("#c7").attr("stroke-opacity", "0.3");
      $("#c6").attr("stroke-opacity", "1");
      $("#c5").attr("stroke-opacity", "1");
      $("#c4").attr("stroke-opacity", "1");
      this.count_no = k;
    }
    if (k == "3") {
      $("#c7").attr("stroke-opacity", "0.3");
      $("#c6").attr("stroke-opacity", "0.3");
      $("#c5").attr("stroke-opacity", "1");
      $("#c4").attr("stroke-opacity", "1");
      this.count_no = k;
    }
    if (k == "2") {
      $("#c7").attr("stroke-opacity", "0.3");
      $("#c6").attr("stroke-opacity", "0.3");
      $("#c5").attr("stroke-opacity", "0.3");
      $("#c4").attr("stroke-opacity", "1");
      this.count_no = k;
    }
    if (k == "1") {
      $("#c7").attr("stroke-opacity", "0.3");
      $("#c6").attr("stroke-opacity", "0.3");
      $("#c5").attr("stroke-opacity", "0.3");
      $("#c4").attr("stroke-opacity", "0.3");
      this.count_no = k;
    }
    console.log("third ran", k);
  }

  async main() {
    const iterator = this.make();
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
    await iterator.next().value;
  }

  exit() {
    this.stopClock();
    this.router.navigateByUrl("/think/observe").then(() => {
      window.location.reload();
    });
  }

  stop() {
    this.stopClock();
    this.router.navigateByUrl("/think/stop");
  }
  select() {
    this.stopClock();
    this.router.navigateByUrl("/think/select").then(() => {
      window.location.reload();
    });
  }

  goto(url) {
    this.stopClock();
    this.router.navigateByUrl(url);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: StopModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
}
