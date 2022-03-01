import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EatModalPage } from '../eat-modal/eat-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-eat-menu',
  templateUrl: './eat-menu.page.html',
  styleUrls: ['./eat-menu.page.scss'],
})
export class EatMenuPage implements OnInit {

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
      component: EatModalPage,
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
