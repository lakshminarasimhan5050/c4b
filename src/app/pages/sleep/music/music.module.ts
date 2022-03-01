import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicPageRoutingModule } from './music-routing.module';
import { ComponentsModule} from '../../../components/components.module';
import { MusicPage } from './music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MusicPage]
})
export class MusicPageModule {}
