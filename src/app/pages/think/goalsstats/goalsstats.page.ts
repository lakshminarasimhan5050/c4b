import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalsstatsModalPage } from '../goalsstats-modal/goalsstats-modal.page';
@Component({
  selector: 'app-goalsstats',
  templateUrl: './goalsstats.page.html',
  styleUrls: ['./goalsstats.page.scss'],
})
export class GoalsstatsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: GoalsstatsModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
