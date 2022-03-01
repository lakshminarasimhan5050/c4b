import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SleepModalPage } from '../sleep-modal/sleep-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-sleep-menu',
  templateUrl: './sleep-menu.page.html',
  styleUrls: ['./sleep-menu.page.scss'],
})
export class SleepMenuPage implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController,
    private loadingctrl: LoadingController
  ) { }

  ngOnInit() {
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }

  debrief(){
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SleepModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async showloading(){
    let loading= await this.loadingctrl.create({
      message:"Please Wait...",
      duration: 1000,
      showBackdrop:true,
      spinner: "bubbles"
    })
    loading.present();
  }


}
