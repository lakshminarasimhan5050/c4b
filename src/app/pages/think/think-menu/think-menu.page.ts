import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ThinkModelPage } from '../think-model/think-model.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-think-menu',
  templateUrl: './think-menu.page.html',
  styleUrls: ['./think-menu.page.scss'],
})
export class ThinkMenuPage implements OnInit {

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
    this.router.navigateByUrl('/think/debrief').then(()=>{window.location.reload()});
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ThinkModelPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  self(){
    this.router.navigateByUrl('/think/self-talk').then(()=>{window.location.reload()});
  }
  focus(){
    this.router.navigateByUrl('/think/focused-meditation').then(()=>{window.location.reload()});
  }
  thought(){
    this.router.navigateByUrl('/think/thought-journal').then(()=>{window.location.reload()});
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
