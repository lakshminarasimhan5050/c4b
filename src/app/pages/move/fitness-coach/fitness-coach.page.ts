import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FitnessCoachModalPage } from '../fitness-coach-modal/fitness-coach-modal.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fitness-coach',
  templateUrl: './fitness-coach.page.html',
  styleUrls: ['./fitness-coach.page.scss'],
})
export class FitnessCoachPage implements OnInit {

  constructor( public modalController: ModalController, private router: Router,) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FitnessCoachModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }

}
