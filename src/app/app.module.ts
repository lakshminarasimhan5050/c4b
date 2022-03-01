import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
//import { NativeStorage } from '@ionic-native/native-storage/ngx'; // Remove the plugin
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { EatModalPageModule } from '../app/pages/eat/eat-modal/eat-modal.module';
import { ThinkModelPageModule } from '../app/pages/think/think-model/think-model.module';
import { MoveModelPageModule } from '../app/pages/move/move-model/move-model.module';
import { SleepModalPageModule } from '../app/pages/sleep/sleep-modal/sleep-modal.module';
import { ConnectModalPageModule } from '../app/pages/connect/connect-modal/connect-modal.module';
import { CopingModalPageModule } from '../app/pages/coping-tools/coping-modal/coping-modal.module';
import { StopModalPageModule } from '../app/pages/think/stop-modal/stop-modal.module';
import { ObserveModalPageModule } from '../app/pages/think/observe-modal/observe-modal.module';
import { SelectModalPageModule } from '../app/pages/think/select-modal/select-modal.module';
import { DebriefModalPageModule } from '../app/pages/think/debrief-modal/debrief-modal.module';
import { FocusedMeditationModalPageModule } from '../app/pages/think/focused-meditation-modal/focused-meditation-modal.module';
import { SelfTalkModalPageModule } from '../app/pages/think/self-talk-modal/self-talk-modal.module';
import { ThoughtJournalModalPageModule } from '../app/pages/think/thought-journal-modal/thought-journal-modal.module';
import { GoalsstatsModalPageModule } from '../app/pages/think/goalsstats-modal/goalsstats-modal.module';
import { OneTheJobModalPageModule } from '../app/pages/move/one-the-job-modal/one-the-job-modal.module';
import { FitnessCoachModalPageModule } from '../app/pages/move/fitness-coach-modal/fitness-coach-modal.module';
import { WholeInModalPageModule } from '../app/pages/move/whole-in-modal/whole-in-modal.module';
import { ZenZoneModalPageModule } from '../app/pages/move/zen-zone-modal/zen-zone-modal.module';
import { YourStatsModalPageModule } from '../app/pages/move/your-stats-modal/your-stats-modal.module';
import { BalancedPlateModalPageModule } from '../app/pages/eat/balanced-plate-modal/balanced-plate-modal.module';
import { Hydration101ModalPageModule } from '../app/pages/eat/hydration101-modal/hydration101-modal.module';
import { WeightManagementModalPageModule } from '../app/pages/eat/weight-management-modal/weight-management-modal.module';
import { YourModalPageModule } from '../app/pages/eat/your-modal/your-modal.module';
import { SleepMeditationModalPageModule } from '../app/pages/sleep/sleep-meditation-modal/sleep-meditation-modal.module';
import { SleepSoundsModalPageModule } from '../app/pages/sleep/sleep-sounds-modal/sleep-sounds-modal.module';
import { SleepTipsModalPageModule } from '../app/pages/sleep/sleep-tips-modal/sleep-tips-modal.module';
import { Your1ModalPageModule } from '../app/pages/sleep/your1-modal/your1-modal.module';
import { CriticalIncidentModalPageModule } from '../app/pages/coping-tools/critical-incident-modal/critical-incident-modal.module';
import { EducationModalPageModule } from '../app/pages/coping-tools/education-modal/education-modal.module';
import { ManagingChangeModalPageModule } from '../app/pages/coping-tools/managing-change-modal/managing-change-modal.module';
import { CopingStrategiesModalPageModule } from '../app/pages/coping-tools/coping-strategies-modal/coping-strategies-modal.module';
import { ChatModalPageModule } from '../app/pages/connect/chat-modal/chat-modal.module';
import { CopModalPageModule } from '../app/pages/connect/cop-modal/cop-modal.module';
import { FunnyModalPageModule } from '../app/pages/connect/funny-modal/funny-modal.module';
import { OurstoryModalPageModule } from '../app/pages/connect/ourstory-modal/ourstory-modal.module';
import { PeerModalPageModule } from '../app/pages/connect/peer-modal/peer-modal.module';
import { SightsModalPageModule } from '../app/pages/connect/sights-modal/sights-modal.module';
import { WhatsModalPageModule } from '../app/pages/connect/whats-modal/whats-modal.module';
import { DayPageModalPageModule } from '../app/pages/move/day-page-modal/day-page-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), DayPageModalPageModule,WhatsModalPageModule,SightsModalPageModule,PeerModalPageModule,OurstoryModalPageModule,FunnyModalPageModule,CopModalPageModule,ChatModalPageModule,CopingStrategiesModalPageModule,ManagingChangeModalPageModule,EducationModalPageModule,CriticalIncidentModalPageModule,Your1ModalPageModule,SleepTipsModalPageModule,SleepSoundsModalPageModule,SleepMeditationModalPageModule,YourModalPageModule,WeightManagementModalPageModule,Hydration101ModalPageModule,BalancedPlateModalPageModule,YourStatsModalPageModule,ZenZoneModalPageModule,WholeInModalPageModule,FitnessCoachModalPageModule,OneTheJobModalPageModule,EatModalPageModule,ThinkModelPageModule,MoveModelPageModule,SleepModalPageModule,ConnectModalPageModule,CopingModalPageModule,StopModalPageModule,ObserveModalPageModule,SelectModalPageModule,DebriefModalPageModule,FocusedMeditationModalPageModule,SelfTalkModalPageModule,ThoughtJournalModalPageModule,GoalsstatsModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    UniqueDeviceID,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
