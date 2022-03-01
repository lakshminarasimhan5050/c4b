import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WeightManagementModalPage } from '../weight-management-modal/weight-management-modal.page';
@Component({
  selector: 'app-weight-management',
  templateUrl: './weight-management.page.html',
  styleUrls: ['./weight-management.page.scss'],
})
export class WeightManagementPage implements OnInit {

  constructor(private router: Router,public modalController: ModalController) { }

  ngOnInit() {}


  goto(url) {
    this.router.navigateByUrl(url);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: WeightManagementModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
