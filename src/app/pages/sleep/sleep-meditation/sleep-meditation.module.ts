import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SleepMeditationPageRoutingModule } from './sleep-meditation-routing.module';
import { SleepMeditationPage } from './sleep-meditation.page';
import { ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepMeditationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SleepMeditationPage]
})
export class SleepMeditationPageModule {}
