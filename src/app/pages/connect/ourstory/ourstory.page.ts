import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OurstoryModalPage } from '../ourstory-modal/ourstory-modal.page';
@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.page.html',
  styleUrls: ['./ourstory.page.scss'],
})
export class OurstoryPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: OurstoryModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
