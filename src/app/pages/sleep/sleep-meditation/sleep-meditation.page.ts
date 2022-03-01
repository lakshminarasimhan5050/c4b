import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SleepMeditationModalPage } from '../sleep-meditation-modal/sleep-meditation-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-sleep-meditation',
  templateUrl: './sleep-meditation.page.html',
  styleUrls: ['./sleep-meditation.page.scss'],
})
export class SleepMeditationPage implements OnInit {

  constructor(private router: Router,public modalController: ModalController,private loadingctrl: LoadingController) { }

  ngOnInit() {
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SleepMeditationModalPage,
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
