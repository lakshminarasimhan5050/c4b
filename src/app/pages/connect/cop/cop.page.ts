import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CopModalPage } from '../cop-modal/cop-modal.page';
@Component({
  selector: 'app-cop',
  templateUrl: './cop.page.html',
  styleUrls: ['./cop.page.scss'],
})
export class CopPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CopModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }



}
