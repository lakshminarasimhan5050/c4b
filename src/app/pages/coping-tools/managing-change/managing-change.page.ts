import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManagingChangeModalPage } from '../managing-change-modal/managing-change-modal.page';
@Component({
  selector: 'app-managing-change',
  templateUrl: './managing-change.page.html',
  styleUrls: ['./managing-change.page.scss'],
})
export class ManagingChangePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ManagingChangeModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
