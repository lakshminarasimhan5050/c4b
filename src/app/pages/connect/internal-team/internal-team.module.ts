import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalTeamPageRoutingModule } from './internal-team-routing.module';

import { InternalTeamPage } from './internal-team.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternalTeamPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InternalTeamPage]
})
export class InternalTeamPageModule {}
