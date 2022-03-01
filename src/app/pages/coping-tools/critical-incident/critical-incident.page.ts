import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CriticalIncidentModalPage } from '../critical-incident-modal/critical-incident-modal.page';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-critical-incident',
  templateUrl: './critical-incident.page.html',
  styleUrls: ['./critical-incident.page.scss'],
})
export class CriticalIncidentPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController, private loadingctrl: LoadingController) { }

  ngOnInit() {}



  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CriticalIncidentModalPage,
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
