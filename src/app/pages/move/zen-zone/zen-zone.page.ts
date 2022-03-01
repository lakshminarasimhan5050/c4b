import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZenZoneModalPage } from '../zen-zone-modal/zen-zone-modal.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-zen-zone',
  templateUrl: './zen-zone.page.html',
  styleUrls: ['./zen-zone.page.scss'],
})
export class ZenZonePage implements OnInit {

  constructor(public modalController: ModalController, private router: Router,) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ZenZoneModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }

}
