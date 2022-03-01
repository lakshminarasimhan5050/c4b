import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CopingStrategiesModalPage } from '../coping-strategies-modal/coping-strategies-modal.page';
@Component({
  selector: 'app-coping-strategies',
  templateUrl: './coping-strategies.page.html',
  styleUrls: ['./coping-strategies.page.scss'],
})
export class CopingStrategiesPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CopingStrategiesModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
