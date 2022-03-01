import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: '/first-time-login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'first-time-login',
        loadChildren: () => import('./pages/auth/first-time-login/first-time-login.module').then(m => m.FirstTimeLoginPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'logout',
        loadChildren: () => import('./pages/auth/logout/logout.module').then(m => m.LogoutPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfilePageModule)
    },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    {
        path: 'move-well/bio-hack-details',
        loadChildren: () => import('./pages/move_well/bio-hack-details/bio-hack-details.module').then(m => m.BioHackDetailsPageModule)
    },
    {
        path: 'think-well/sos-emotion-process-details',
        loadChildren: () => import('./pages/think_well/sos-emotion-process-details/sos-emotion-process-details.module').then(m => m.SosEmotionProcessDetailsPageModule)
    },
    {
        path: 'analytic-meditations-details',
        loadChildren: () => import('./pages/think_well/analytic-meditations-details/analytic-meditations-details.module').then(m => m.AnalyticMeditationsDetailsPageModule)
    },
    {
        path: 'affirmations-details',
        loadChildren: () => import('./pages/think_well/affirmations-details/affirmations-details.module').then(m => m.AffirmationsDetailsPageModule)
    },
    {
        path: 'journaling-details',
        loadChildren: () => import('./pages/think_well/journaling-details/journaling-details.module').then(m => m.JournalingDetailsPageModule)
    },
    {
        path: 'think-well/stop',
        loadChildren: () => import('./pages/think_well/stop/stop.module').then(m => m.StopPageModule)
    },
    {
        path: 'think-well/observe',
        loadChildren: () => import('./pages/think_well/observe/observe.module').then(m => m.ObservePageModule)
    },
    {
        path: 'think-well/select',
        loadChildren: () => import('./pages/think_well/select/select.module').then(m => m.SelectPageModule)
    },
    {
        path: 'eat-well/assessment',
        loadChildren: () => import('./pages/eat_well/assessment/assessment.module').then(m => m.AssessmentPageModule)
    },
    {
        path: 'eat-well/balanced-plate',
        loadChildren: () => import('./pages/eat_well/balanced-plate/balanced-plate.module').then(m => m.BalancedPlatePageModule)
    },
    {
        path: 'eat-well/nutrition',
        loadChildren: () => import('./pages/eat_well/nutrition/nutrition.module').then(m => m.NutritionPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map