import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DayPageModalPage } from '../day-page-modal/day-page-modal.page';


@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.page.html',
  styleUrls: ['./day-page.page.scss'],
})
export class DayPagePage implements OnInit {

  constructor(private router: Router,
    public modalController: ModalController) { }

  ngOnInit() { }


  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: DayPageModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
