import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InTheMomentVsBigPicturePage } from './in-the-moment-vs-big-picture.page';

const routes: Routes = [
  {
    path: '',
    component: InTheMomentVsBigPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InTheMomentVsBigPicturePageRoutingModule {}
