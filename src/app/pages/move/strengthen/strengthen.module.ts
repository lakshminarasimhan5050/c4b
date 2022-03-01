import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule} from '../../../components/components.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { IonicModule } from '@ionic/angular';

import { StrengthenPageRoutingModule } from './strengthen-routing.module';

import { StrengthenPage } from './strengthen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrengthenPageRoutingModule,
    ComponentsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  declarations: [StrengthenPage]
})
export class StrengthenPageModule {}
