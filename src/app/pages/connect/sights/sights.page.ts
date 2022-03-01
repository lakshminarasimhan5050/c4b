import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SightsModalPage } from '../sights-modal/sights-modal.page';
@Component({
  selector: 'app-sights',
  templateUrl: './sights.page.html',
  styleUrls: ['./sights.page.scss'],
})
export class SightsPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SightsModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
