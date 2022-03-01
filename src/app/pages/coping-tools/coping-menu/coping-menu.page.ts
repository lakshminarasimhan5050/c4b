import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CopingModalPage } from '../coping-modal/coping-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-coping-menu',
  templateUrl: './coping-menu.page.html',
  styleUrls: ['./coping-menu.page.scss'],
})
export class CopingMenuPage implements OnInit {

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
      component: CopingModalPage,
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
