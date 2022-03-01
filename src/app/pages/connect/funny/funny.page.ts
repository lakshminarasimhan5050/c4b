import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FunnyModalPage } from '../funny-modal/funny-modal.page';
@Component({
  selector: 'app-funny',
  templateUrl: './funny.page.html',
  styleUrls: ['./funny.page.scss'],
})
export class FunnyPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FunnyModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
