import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: '', redirectTo: '/first-time-login', pathMatch: 'full' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'first-time-login',
    loadChildren: () => import('./pages/auth/first-time-login/first-time-login.module').then( m => m.FirstTimeLoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/auth/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  /* {
    path: 'move-well/bio-hack-details',
    loadChildren: () => import('./pages/move_well/bio-hack-details/bio-hack-details.module').then( m => m.BioHackDetailsPageModule)
  },
  {
    path: 'think-well/sos-emotion-process-details',
    loadChildren: () => import('./pages/think_well/sos-emotion-process-details/sos-emotion-process-details.module').then( m => m.SosEmotionProcessDetailsPageModule)
  },
  {
    path: 'analytic-meditations-details',
    loadChildren: () => import('./pages/think_well/analytic-meditations-details/analytic-meditations-details.module').then( m => m.AnalyticMeditationsDetailsPageModule)
  },
  {
    path: 'affirmations-details',
    loadChildren: () => import('./pages/think_well/affirmations-details/affirmations-details.module').then( m => m.AffirmationsDetailsPageModule)
  },
  {
    path: 'journaling-details',
    loadChildren: () => import('./pages/think_well/journaling-details/journaling-details.module').then( m => m.JournalingDetailsPageModule)
  }, */
  {
    path: 'think/stop',
    loadChildren: () => import('./pages/think/stop/stop.module').then( m => m.StopPageModule)
  },
  {
    path: 'think/observe',
    loadChildren: () => import('./pages/think/observe/observe.module').then( m => m.ObservePageModule)
  },
  {
    path: 'think/select',
    loadChildren: () => import('./pages/think/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'think/focused-meditation',
    loadChildren: () => import('./pages/think/focused-meditation/focused-meditation.module').then( m => m.FocusedMeditationPageModule)
  },
  {
    path: 'move/bio-hacks',
    loadChildren: () => import('./pages/move/bio-hackes/bio-hackes.module').then( m => m.BioHackesPageModule)
  },
  {
    path: 'think/self-talk',
    loadChildren: () => import('./pages/think/self-talk/self-talk.module').then( m => m.SelfTalkPageModule)
  },
  {
    path: 'think/thought-journal',
    loadChildren: () => import('./pages/think/thought-journal/thought-journal.module').then( m => m.ThoughtJournalPageModule)
  },
  {
    path: 'think/debrief',
    loadChildren: () => import('./pages/think/debrief/debrief.module').then( m => m.DebriefPageModule)
  },
  {
    path: 'think/know-your-intention',
    loadChildren: () => import('./pages/think/know-your-intention/know-your-intention.module').then( m => m.KnowYourIntentionPageModule)
  },
  {
    path: 'think/consider-options',
    loadChildren: () => import('./pages/think/consider-options/consider-options.module').then( m => m.ConsiderOptionsPageModule)
  },
  {
    path: 'think/select-with-intention',
    loadChildren: () => import('./pages/think/select-with-intention/select-with-intention.module').then( m => m.SelectWithIntentionPageModule)
  },
  {
    path: 'think/reset-mindset',
    loadChildren: () => import('./pages/think/reset-mindset/reset-mindset.module').then( m => m.ResetMindsetPageModule)
  },
  {
    path: 'move/body-recovery',
    loadChildren: () => import('./pages/move/body-recovery/body-recovery.module').then( m => m.BodyRecoveryPageModule)
  },
  {
    path: 'move/dispatch',
    loadChildren: () => import('./pages/move/dispatch/dispatch.module').then( m => m.DispatchPageModule)
  },
  {
    path: 'move/fitness-coach',
    loadChildren: () => import('./pages/move/fitness-coach/fitness-coach.module').then( m => m.FitnessCoachPageModule)
  },
  {
    path: 'move/whole-in',
    loadChildren: () => import('./pages/move/whole-in/whole-in.module').then( m => m.WholeInPageModule)
  },
  {
    path: 'move/zen-zone',
    loadChildren: () => import('./pages/move/zen-zone/zen-zone.module').then( m => m.ZenZonePageModule)
  },
  {
    path: 'move/your-stats',
    loadChildren: () => import('./pages/move/your-stats/your-stats.module').then( m => m.YourStatsPageModule)
  },
  {
    path: 'move/day-page',
    loadChildren: () => import('./pages/move/day-page/day-page.module').then( m => m.DayPagePageModule)
  },
  {
    path: 'move/workout',
    loadChildren: () => import('./pages/move/workout/workout.module').then( m => m.WorkoutPageModule)
  },
  {
    path: 'move/yoga',
    loadChildren: () => import('./pages/move/yoga/yoga.module').then( m => m.YogaPageModule)
  },
  {
    path: 'move/day-bio-hacks',
    loadChildren: () => import('./pages/move/day-bio-hacks/day-bio-hacks.module').then( m => m.DayBioHacksPageModule)
  },
  {
    path: 'move/day-health-tips',
    loadChildren: () => import('./pages/move/day-health-tips/day-health-tips.module').then( m => m.DayHealthTipsPageModule)
  },
  {
    path: 'sleep/sleep-meditation',
    loadChildren: () => import('./pages/sleep/sleep-meditation/sleep-meditation.module').then( m => m.SleepMeditationPageModule)
  },
  {
    path: 'sleep/sleep-sounds',
    loadChildren: () => import('./pages/sleep/sleep-sounds/sleep-sounds.module').then( m => m.SleepSoundsPageModule)
  },
  {
    path: 'sleep/sleep-tips',
    loadChildren: () => import('./pages/sleep/sleep-tips/sleep-tips.module').then( m => m.SleepTipsPageModule)
  },
  {
    path: 'sleep/sleep-stories',
    loadChildren: () => import('./pages/sleep/sleep-stories/sleep-stories.module').then( m => m.SleepStoriesPageModule)
  },
  {
    path: 'sleep/your-stats',
    loadChildren: () => import('./pages/sleep/your-stats/your-stats.module').then( m => m.YourStatsPageModule)
  },
  {
    path: 'sleep/sleep-logs',
    loadChildren: () => import('./pages/sleep/sleep-logs/sleep-logs.module').then( m => m.SleepLogsPageModule)
  },
  {
    path: 'eat/assessment',
    loadChildren: () => import('./pages/eat/assessment/assessment.module').then( m => m.AssessmentPageModule)
  },
  {
    path: 'eat/balanced-plate',
    loadChildren: () => import('./pages/eat/balanced-plate/balanced-plate.module').then( m => m.BalancedPlatePageModule)
  },
  {
    path: 'eat/nutrition101',
    loadChildren: () => import('./pages/eat/nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'eat/hydration101',
    loadChildren: () => import('./pages/eat/hydration101/hydration101.module').then( m => m.Hydration101PageModule)
  },
  {
    path: 'eat/weight-management',
    loadChildren: () => import('./pages/eat/weight-management/weight-management.module').then( m => m.WeightManagementPageModule)
  },
  {
    path: 'eat/your-stats',
    loadChildren: () => import('./pages/eat/your-stats/your-stats.module').then( m => m.YourStatsPageModule)
  },
  {
    path: 'eat/scale-tracker',
    loadChildren: () => import('./pages/eat/scale-tracker/scale-tracker.module').then( m => m.ScaleTrackerPageModule)
  },

  {
    path: 'coping-tools/critical-incident',
    loadChildren: () => import('./pages/coping-tools/critical-incident/critical-incident.module').then( m => m.CriticalIncidentPageModule)
  },
  {
    path: 'coping-tools/education',
    loadChildren: () => import('./pages/coping-tools/education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'coping-tools/managing-change',
    loadChildren: () => import('./pages/coping-tools/managing-change/managing-change.module').then( m => m.ManagingChangePageModule)
  },
  {
    path: 'coping-tools/coping-strategies',
    loadChildren: () => import('./pages/coping-tools/coping-strategies/coping-strategies.module').then( m => m.CopingStrategiesPageModule)
  },
  {
    path: 'coping-tools/come-down',
    loadChildren: () => import('./pages/coping-tools/come-down/come-down.module').then( m => m.ComeDownPageModule)
  },
  {
    path: 'coping-tools/open-communications',
    loadChildren: () => import('./pages/coping-tools/open-communications/open-communications.module').then( m => m.OpenCommunicationsPageModule)
  },
  {
    path: 'coping-tools/down-time',
    loadChildren: () => import('./pages/coping-tools/down-time/down-time.module').then( m => m.DownTimePageModule)
  },
  {
    path: 'coping-tools/effort',
    loadChildren: () => import('./pages/coping-tools/effort/effort.module').then( m => m.EffortPageModule)
  },
  {
    path: 'connect/chat',
    loadChildren: () => import('./pages/connect/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'connect/cop',
    loadChildren: () => import('./pages/connect/cop/cop.module').then( m => m.CopPageModule)
  },
  {
    path: 'connect/funny',
    loadChildren: () => import('./pages/connect/funny/funny.module').then( m => m.FunnyPageModule)
  },
  {
    path: 'connect/ourstory',
    loadChildren: () => import('./pages/connect/ourstory/ourstory.module').then( m => m.OurstoryPageModule)
  },
  {
    path: 'connect/peer',
    loadChildren: () => import('./pages/connect/peer/peer.module').then( m => m.PeerPageModule)
  },
  {
    path: 'connect/sights',
    loadChildren: () => import('./pages/connect/sights/sights.module').then( m => m.SightsPageModule)
  },
  {
    path: 'connect/whats',
    loadChildren: () => import('./pages/connect/whats/whats.module').then( m => m.WhatsPageModule)
  },
  {
    path: 'connect/peer/internal-team',
    loadChildren: () => import('./pages/connect/internal-team/internal-team.module').then( m => m.InternalTeamPageModule)
  },
  {
    path: 'connect/peer/dept-protocols',
    loadChildren: () => import('./pages/connect/dept-protocols/dept-protocols.module').then( m => m.DeptProtocolsPageModule)
  },
  {
    path: 'connect/peer/external',
    loadChildren: () => import('./pages/connect/external/external.module').then( m => m.ExternalPageModule)
  },
  
  {
    path: 'think/anger-story',
    loadChildren: () => import('./pages/think/anger-story/anger-story.module').then( m => m.AngerStoryPageModule)
  },
 
  {
    path: 'aligned-vs-conflicted',
    loadChildren: () => import('./pages/think/aligned-vs-conflicted/aligned-vs-conflicted.module').then( m => m.AlignedVsConflictedPageModule)
  },
  {
    path: 'in-the-moment-vs-big-picture',
    loadChildren: () => import('./pages/think/in-the-moment-vs-big-picture/in-the-moment-vs-big-picture.module').then( m => m.InTheMomentVsBigPicturePageModule)
  },
  {
    path: 'consequences',
    loadChildren: () => import('./pages/think/consequences/consequences.module').then( m => m.ConsequencesPageModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./pages/think/reminders/reminders.module').then( m => m.RemindersPageModule)
  },
  {
    path: 'practical-techniques',
    loadChildren: () => import('./pages/think/practical-techniques/practical-techniques.module').then( m => m.PracticalTechniquesPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'think/goalsstats',
    loadChildren: () => import('./pages/think/goalsstats/goalsstats.module').then( m => m.GoalsstatsPageModule)
  },
  {
    path: 'body-scan',
    loadChildren: () => import('./pages/sleep/body-scan/body-scan.module').then( m => m.BodyScanPageModule)
  },
  {
    path: 'breathwork',
    loadChildren: () => import('./pages/sleep/breathwork/breathwork.module').then( m => m.BreathworkPageModule)
  },
  {
    path: 'gratitude-journal',
    loadChildren: () => import('./pages/sleep/gratitude-journal/gratitude-journal.module').then( m => m.GratitudeJournalPageModule)
  },
  {
    path: 'self-hypnosis',
    loadChildren: () => import('./pages/sleep/self-hypnosis/self-hypnosis.module').then( m => m.SelfHypnosisPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/sleep/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'ambient-noise',
    loadChildren: () => import('./pages/sleep/ambient-noise/ambient-noise.module').then( m => m.AmbientNoisePageModule)
  },
  {
    path: 'binaural-beats',
    loadChildren: () => import('./pages/sleep/binaural-beats/binaural-beats.module').then( m => m.BinauralBeatsPageModule)
  },
  {
    path: 'natural',
    loadChildren: () => import('./pages/sleep/natural/natural.module').then( m => m.NaturalPageModule)
  },
  {
    path: 'sleep-influencers',
    loadChildren: () => import('./pages/sleep/sleep-influencers/sleep-influencers.module').then( m => m.SleepInfluencersPageModule)
  },
  {
    path: 'on-the-job',
    loadChildren: () => import('./pages/move/on-the-job/on-the-job.module').then( m => m.OnTheJobPageModule)
  },
  {
    path: 'rhythm',
    loadChildren: () => import('./pages/sleep/rhythm/rhythm.module').then( m => m.RhythmPageModule)
  },
  {
    path: 'why-it-matters',
    loadChildren: () => import('./pages/sleep/why-it-matters/why-it-matters.module').then( m => m.WhyItMattersPageModule)
  },
  {
    path: 'move-menu',
    loadChildren: () => import('./pages/move/move-menu/move-menu.module').then( m => m.MoveMenuPageModule)
  },
  {
    path: 'eat-menu',
    loadChildren: () => import('./pages/eat/eat-menu/eat-menu.module').then( m => m.EatMenuPageModule)
  },
  {
    path: 'sleep-menu',
    loadChildren: () => import('./pages/sleep/sleep-menu/sleep-menu.module').then( m => m.SleepMenuPageModule)
  },
  {
    path: 'coping-menu',
    loadChildren: () => import('./pages/coping-tools/coping-menu/coping-menu.module').then( m => m.CopingMenuPageModule)
  },
  {
    path: 'connect-menu',
    loadChildren: () => import('./pages/connect/connect-menu/connect-menu.module').then( m => m.ConnectMenuPageModule)
  },
  {
    path: 'think-menu',
    loadChildren: () => import('./pages/think/think-menu/think-menu.module').then( m => m.ThinkMenuPageModule)
  },
  {
    path: 'eat-modal',
    loadChildren: () => import('./pages/eat/eat-modal/eat-modal.module').then( m => m.EatModalPageModule)
  },
  {
    path: 'think-model',
    loadChildren: () => import('./pages/think/think-model/think-model.module').then( m => m.ThinkModelPageModule)
  },
  {
    path: 'move-model',
    loadChildren: () => import('./pages/move/move-model/move-model.module').then( m => m.MoveModelPageModule)
  },
  {
    path: 'sleep-modal',
    loadChildren: () => import('./pages/sleep/sleep-modal/sleep-modal.module').then( m => m.SleepModalPageModule)
  },
  {
    path: 'connect-modal',
    loadChildren: () => import('./pages/connect/connect-modal/connect-modal.module').then( m => m.ConnectModalPageModule)
  },
  {
    path: 'coping-modal',
    loadChildren: () => import('./pages/coping-tools/coping-modal/coping-modal.module').then( m => m.CopingModalPageModule)
  },
  {
    path: 'stop-modal',
    loadChildren: () => import('./pages/think/stop-modal/stop-modal.module').then( m => m.StopModalPageModule)
  },
  {
    path: 'observe-modal',
    loadChildren: () => import('./pages/think/observe-modal/observe-modal.module').then( m => m.ObserveModalPageModule)
  },
  {
    path: 'select-modal',
    loadChildren: () => import('./pages/think/select-modal/select-modal.module').then( m => m.SelectModalPageModule)
  },
  {
    path: 'debrief-modal',
    loadChildren: () => import('./pages/think/debrief-modal/debrief-modal.module').then( m => m.DebriefModalPageModule)
  },
  {
    path: 'focused-meditation-modal',
    loadChildren: () => import('./pages/think/focused-meditation-modal/focused-meditation-modal.module').then( m => m.FocusedMeditationModalPageModule)
  },
  {
    path: 'self-talk-modal',
    loadChildren: () => import('./pages/think/self-talk-modal/self-talk-modal.module').then( m => m.SelfTalkModalPageModule)
  },
  {
    path: 'thought-journal-modal',
    loadChildren: () => import('./pages/think/thought-journal-modal/thought-journal-modal.module').then( m => m.ThoughtJournalModalPageModule)
  },
  {
    path: 'goalsstats-modal',
    loadChildren: () => import('./pages/think/goalsstats-modal/goalsstats-modal.module').then( m => m.GoalsstatsModalPageModule)
  },
  {
    path: 'one-the-job-modal',
    loadChildren: () => import('./pages/move/one-the-job-modal/one-the-job-modal.module').then( m => m.OneTheJobModalPageModule)
  },
  {
    path: 'fitness-coach-modal',
    loadChildren: () => import('./pages/move/fitness-coach-modal/fitness-coach-modal.module').then( m => m.FitnessCoachModalPageModule)
  },
  {
    path: 'whole-in-modal',
    loadChildren: () => import('./pages/move/whole-in-modal/whole-in-modal.module').then( m => m.WholeInModalPageModule)
  },
  {
    path: 'zen-zone-modal',
    loadChildren: () => import('./pages/move/zen-zone-modal/zen-zone-modal.module').then( m => m.ZenZoneModalPageModule)
  },
  {
    path: 'your-stats-modal',
    loadChildren: () => import('./pages/move/your-stats-modal/your-stats-modal.module').then( m => m.YourStatsModalPageModule)
  },
  {
    path: 'balanced-plate-modal',
    loadChildren: () => import('./pages/eat/balanced-plate-modal/balanced-plate-modal.module').then( m => m.BalancedPlateModalPageModule)
  },
  {
    path: 'hydration101-modal',
    loadChildren: () => import('./pages/eat/hydration101-modal/hydration101-modal.module').then( m => m.Hydration101ModalPageModule)
  },
  {
    path: 'weight-management-modal',
    loadChildren: () => import('./pages/eat/weight-management-modal/weight-management-modal.module').then( m => m.WeightManagementModalPageModule)
  },
  {
    path: 'your-modal',
    loadChildren: () => import('./pages/eat/your-modal/your-modal.module').then( m => m.YourModalPageModule)
  },
  {
    path: 'sleep-meditation-modal',
    loadChildren: () => import('./pages/sleep/sleep-meditation-modal/sleep-meditation-modal.module').then( m => m.SleepMeditationModalPageModule)
  },
  {
    path: 'sleep-sounds-modal',
    loadChildren: () => import('./pages/sleep/sleep-sounds-modal/sleep-sounds-modal.module').then( m => m.SleepSoundsModalPageModule)
  },
  {
    path: 'sleep-tips-modal',
    loadChildren: () => import('./pages/sleep/sleep-tips-modal/sleep-tips-modal.module').then( m => m.SleepTipsModalPageModule)
  },
  {
    path: 'your1-modal',
    loadChildren: () => import('./pages/sleep/your1-modal/your1-modal.module').then( m => m.Your1ModalPageModule)
  },
  {
    path: 'critical-incident-modal',
    loadChildren: () => import('./pages/coping-tools/critical-incident-modal/critical-incident-modal.module').then( m => m.CriticalIncidentModalPageModule)
  },
  {
    path: 'education-modal',
    loadChildren: () => import('./pages/coping-tools/education-modal/education-modal.module').then( m => m.EducationModalPageModule)
  },
  {
    path: 'managing-change-modal',
    loadChildren: () => import('./pages/coping-tools/managing-change-modal/managing-change-modal.module').then( m => m.ManagingChangeModalPageModule)
  },
  {
    path: 'coping-strategies-modal',
    loadChildren: () => import('./pages/coping-tools/coping-strategies-modal/coping-strategies-modal.module').then( m => m.CopingStrategiesModalPageModule)
  },
  {
    path: 'chat-modal',
    loadChildren: () => import('./pages/connect/chat-modal/chat-modal.module').then( m => m.ChatModalPageModule)
  },
  {
    path: 'cop-modal',
    loadChildren: () => import('./pages/connect/cop-modal/cop-modal.module').then( m => m.CopModalPageModule)
  },
  {
    path: 'funny-modal',
    loadChildren: () => import('./pages/connect/funny-modal/funny-modal.module').then( m => m.FunnyModalPageModule)
  },
  {
    path: 'ourstory-modal',
    loadChildren: () => import('./pages/connect/ourstory-modal/ourstory-modal.module').then( m => m.OurstoryModalPageModule)
  },
  {
    path: 'peer-modal',
    loadChildren: () => import('./pages/connect/peer-modal/peer-modal.module').then( m => m.PeerModalPageModule)
  },
  {
    path: 'sights-modal',
    loadChildren: () => import('./pages/connect/sights-modal/sights-modal.module').then( m => m.SightsModalPageModule)
  },
  {
    path: 'whats-modal',
    loadChildren: () => import('./pages/connect/whats-modal/whats-modal.module').then( m => m.WhatsModalPageModule)
  },
  {
    path: 'day-page-modal',
    loadChildren: () => import('./pages/move/day-page-modal/day-page-modal.module').then( m => m.DayPageModalPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'fitcoa',
    loadChildren: () => import('./pages/fitcoa/fitcoa.module').then( m => m.FitcoaPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./pages/move/core/core.module').then( m => m.CorePageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./pages/move/cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'hiit',
    loadChildren: () => import('./pages/move/hiit/hiit.module').then( m => m.HiitPageModule)
  },
  {
    path: 'resistance',
    loadChildren: () => import('./pages/move/resistance/resistance.module').then( m => m.ResistancePageModule)
  },
  {
    path: 'strengthen',
    loadChildren: () => import('./pages/move/strengthen/strengthen.module').then( m => m.StrengthenPageModule)
  },
  {
    path: 'move/rhythm',
    loadChildren: () => import('./pages/move/rhythm/rhythm.module').then( m => m.RhythmPageModule)
  },  {
    path: 'restore',
    loadChildren: () => import('./pages/move/restore/restore.module').then( m => m.RestorePageModule)
  },


  
  













  
  
  
  
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
