import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Your1ModalPage } from '../your1-modal/your1-modal.page';
@Component({
  selector: 'app-your-stats',
  templateUrl: './your-stats.page.html',
  styleUrls: ['./your-stats.page.scss'],
})
export class YourStatsPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {}


  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: Your1ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }



}
