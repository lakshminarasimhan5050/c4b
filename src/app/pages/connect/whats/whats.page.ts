import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WhatsModalPage } from '../whats-modal/whats-modal.page';
@Component({
  selector: 'app-whats',
  templateUrl: './whats.page.html',
  styleUrls: ['./whats.page.scss'],
})
export class WhatsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: WhatsModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
