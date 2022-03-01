import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatModalPage } from '../chat-modal/chat-modal.page';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ChatModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }



}
