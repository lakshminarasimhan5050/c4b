import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConnectModalPage } from '../connect-modal/connect-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-connect-menu',
  templateUrl: './connect-menu.page.html',
  styleUrls: ['./connect-menu.page.scss'],
})
export class ConnectMenuPage implements OnInit {

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
      component: ConnectModalPage,
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
