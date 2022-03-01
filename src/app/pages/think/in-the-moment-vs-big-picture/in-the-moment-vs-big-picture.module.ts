import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InTheMomentVsBigPicturePageRoutingModule } from './in-the-moment-vs-big-picture-routing.module';

import { InTheMomentVsBigPicturePage } from './in-the-moment-vs-big-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InTheMomentVsBigPicturePageRoutingModule
  ],
  declarations: [InTheMomentVsBigPicturePage]
})
export class InTheMomentVsBigPicturePageModule {}
