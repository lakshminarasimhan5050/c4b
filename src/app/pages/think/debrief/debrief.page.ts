import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DebriefModalPage } from '../debrief-modal/debrief-modal.page';
declare var jQuery;

@Component({
  selector: 'app-debrief',
  templateUrl: './debrief.page.html',
  styleUrls: ['./debrief.page.scss'],
})
export class DebriefPage implements OnInit {

  constructor(
    private platform: Platform,private router:Router,
    public modalController: ModalController
  ) { 
      this.platform.ready().then(() => {
      });
  }

  intencity:any=-1;
  reaction:any=-1;
  stres_created:any=-1;
  stres_percieved:any=-1;

  changeIntencity(newVal){
    this.intencity=newVal;
  }
  changeReaction(newVal){
    this.reaction=newVal;
  }
  changeStresscreated(newVal){
    this.stres_created=newVal;
  }
  changeStresPercived(newVal){
    this.stres_percieved=newVal
  }

  Intencity:any=-1;
  Reaction:any=-1;
  stresCreated:any=-1;
  stresPercieved:any=-1;

  ChangeIntencity(newVal){
    this.Intencity=newVal;
  }
  ChangeReaction(newVal){
    this.Reaction=newVal;
  }
  ChangeStresscreated(newVal){
    this.stresCreated=newVal;
  }
  ChangeStresPercived(newVal){
    this.stresPercieved=newVal
  }


  discontentIntencity:any=-1;
  discontentReaction:any=-1;
  discontentstresCreated:any=-1;
  discontentstresPercieved:any=-1;

  discontentChangeIntencity(newVal){
    this.discontentIntencity=newVal;
  }
  discontentChangeReaction(newVal){
    this.discontentReaction=newVal;
  }
  discontentChangeStresscreated(newVal){
    this.discontentstresCreated=newVal;
  }
  discontentChangeStresPercived(newVal){
    this.discontentstresPercieved=newVal
  }


  envyintencity:any=-1;
  envyreaction:any=-1;
  envystres_created:any=-1;
  envystres_percieved:any=-1;

  envychangeIntencity(newVal){
    this.envyintencity=newVal;
  }
  envychangeReaction(newVal){
    this.envyreaction=newVal;
  }
  envychangeStresscreated(newVal){
    this.envystres_created=newVal;
  }
  envychangeStresPercived(newVal){
    this.envystres_percieved=newVal
  }

  sadintencity:any=-1;
  sadreaction:any=-1;
  sadstres_created:any=-1;
  sadstres_percieved:any=-1;

  sadchangeIntencity(newVal){
    this.sadintencity=newVal;
  }
  sadchangeReaction(newVal){
    this.sadreaction=newVal;
  }
  sadchangeStresscreated(newVal){
    this.sadstres_created=newVal;
  }
  sadchangeStresPercived(newVal){
    this.sadstres_percieved=newVal
  }

  anxietyintencity:any=-1;
  anxietyreaction:any=-1;
  anxietystres_created:any=-1;
  anxietystres_percieved:any=-1;

  anxietychangeIntencity(newVal){
    this.anxietyintencity=newVal;
  }
  anxietychangeReaction(newVal){
    this.anxietyreaction=newVal;
  }
  anxietychangeStresscreated(newVal){
    this.anxietystres_created=newVal;
  }
  anxietychangeStresPercived(newVal){
    this.anxietystres_percieved=newVal
  }

  lonelinessintencity:any=-1;
  lonelinessreaction:any=-1;
  lonelinessstres_created:any=-1;
  lonelinessstres_percieved:any=-1;

  lonelinesschangeIntencity(newVal){
    this.lonelinessintencity=newVal;
  }
  lonelinesschangeReaction(newVal){
    this.lonelinessreaction=newVal;
  }
  lonelinesschangeStresscreated(newVal){
    this.lonelinessstres_created=newVal;
  }
  lonelinesschangeStresPercived(newVal){
    this.lonelinessstres_percieved=newVal
  }


  ngOnInit() {
    
  }

  thoughtJournal(){
    this.router.navigateByUrl('think/thought-journal').then(setInterval=>{window.location.reload()});
  }
  
  resetMindset(){
  this.router.navigateByUrl('think/reset-mindset').then(e=>{window.location.reload()});
}

 check() {
  //document.getElementById("myCheck").onchange = true;
}
async presentModal() {
  const modal = await this.modalController.create({
    component: DebriefModalPage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();
}


}
