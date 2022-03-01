import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BalancedPlateModalPage } from '../balanced-plate-modal/balanced-plate-modal.page';
@Component({
  selector: 'app-balanced-plate',
  templateUrl: './balanced-plate.page.html',
  styleUrls: ['./balanced-plate.page.scss'],
})
export class BalancedPlatePage implements OnInit {

  constructor(
    private platform : Platform,
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: BalancedPlateModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
