import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MoveModelPage } from '../move-model/move-model.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-move-menu',
  templateUrl: './move-menu.page.html',
  styleUrls: ['./move-menu.page.scss'],
})
export class MoveMenuPage implements OnInit {

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
      component: MoveModelPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
  // async showloading(){
  //   let loading= await this.loadingctrl.create({
  //     message:"Please Wait...",
  //     duration: 1000,
  //     showBackdrop:true,
  //     spinner: "bubbles"
  //   })
  //   loading.present();
  // }


}
