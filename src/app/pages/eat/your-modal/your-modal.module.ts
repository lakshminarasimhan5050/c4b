import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourModalPageRoutingModule } from './your-modal-routing.module';

import { YourModalPage } from './your-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourModalPageRoutingModule
  ],
  declarations: [YourModalPage]
})
export class YourModalPageModule {}
