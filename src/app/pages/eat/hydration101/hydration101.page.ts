import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Hydration101ModalPage } from '../hydration101-modal/hydration101-modal.page';
@Component({
  selector: 'app-hydration101',
  templateUrl: './hydration101.page.html',
  styleUrls: ['./hydration101.page.scss'],
})
export class Hydration101Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: Hydration101ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
