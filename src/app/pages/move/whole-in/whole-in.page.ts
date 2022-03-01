import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WholeInModalPage } from '../whole-in-modal/whole-in-modal.page';

@Component({
  selector: 'app-whole-in',
  templateUrl: './whole-in.page.html',
  styleUrls: ['./whole-in.page.scss'],
})
export class WholeInPage implements OnInit {

  constructor(private router: Router,
    public modalController: ModalController
    ) { }

  ngOnInit() { }

  goto(url) {
    this.router.navigateByUrl(url);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: WholeInModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
