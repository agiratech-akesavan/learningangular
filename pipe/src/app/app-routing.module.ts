import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InpurePipeComponent } from './inpure-pipe/inpure-pipe.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';

const routes: Routes = [
  {
    path:"pure",component:PurePipeComponent
  },
  {
    path:"inpure",component:InpurePipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
