import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { YourModalPage } from '../your-modal/your-modal.page';
@Component({
  selector: 'app-your-stats',
  templateUrl: './your-stats.page.html',
  styleUrls: ['./your-stats.page.scss'],
})
export class YourStatsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: YourModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
