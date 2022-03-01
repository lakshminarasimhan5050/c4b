import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlignedVsConflictedPageRoutingModule } from './aligned-vs-conflicted-routing.module';

import { AlignedVsConflictedPage } from './aligned-vs-conflicted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlignedVsConflictedPageRoutingModule
  ],
  declarations: [AlignedVsConflictedPage]
})
export class AlignedVsConflictedPageModule {}
