import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetMindsetPageRoutingModule } from './reset-mindset-routing.module';
import { ResetMindsetPage } from './reset-mindset.page';
import { ComponentsModule } from '../../../components/components.module';
import { ResetMindsetModalPage } from '../reset-mindset-modal/reset-mindset-modal.page';
import { ResetMindsetModalPageModule } from '../reset-mindset-modal/reset-mindset-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetMindsetPageRoutingModule,
    ComponentsModule,
    ResetMindsetModalPageModule
  ],
  declarations: [ResetMindsetPage],
  entryComponents:[ResetMindsetModalPage]
})
export class ResetMindsetPageModule {}
