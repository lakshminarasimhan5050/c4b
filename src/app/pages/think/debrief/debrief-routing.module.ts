import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Router } from '@angular/router';

import { DebriefPage } from './debrief.page';


const routes: Routes = [
  {
    path: '',
    component: DebriefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})



export class DebriefPageRoutingModule {
  constructor(private router: Router) { }

  ngOnInit() {
      this.router.navigate(['./thought-journal']);
    }
}
