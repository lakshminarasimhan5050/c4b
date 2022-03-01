import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SleepSoundsModalPage } from '../sleep-sounds-modal/sleep-sounds-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-sleep-sounds',
  templateUrl: './sleep-sounds.page.html',
  styleUrls: ['./sleep-sounds.page.scss'],
})
export class SleepSoundsPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController, private loadingctrl: LoadingController) { }

  ngOnInit() {
  }

  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SleepSoundsModalPage,
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
