import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngerStoryPageRoutingModule } from './anger-story-routing.module';

import { AngerStoryPage } from './anger-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngerStoryPageRoutingModule
  ],
  declarations: [AngerStoryPage]
})
export class AngerStoryPageModule {}
