import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OneTheJobModalPage } from '../one-the-job-modal/one-the-job-modal.page';
@Component({
  selector: 'app-on-the-job',
  templateUrl: './on-the-job.page.html',
  styleUrls: ['./on-the-job.page.scss'],
})
export class OnTheJobPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: OneTheJobModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
