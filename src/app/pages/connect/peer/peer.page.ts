import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PeerModalPage } from '../peer-modal/peer-modal.page';
@Component({
  selector: 'app-peer',
  templateUrl: './peer.page.html',
  styleUrls: ['./peer.page.scss'],
})
export class PeerPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { 
    
  }

  ngOnInit() {
  }



  goto(url) {
    this.router.navigateByUrl(url);
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: PeerModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
