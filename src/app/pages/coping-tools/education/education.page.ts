import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EducationModalPage } from '../education-modal/education-modal.page';
@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  } 
  async presentModal() {
    const modal = await this.modalController.create({
      component: EducationModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
