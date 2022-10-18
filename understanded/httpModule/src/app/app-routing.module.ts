import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { GetdataComponent } from './getdata/getdata.component';

const routes: Routes = [
  {path:"getdata",component:GetdataComponent},
  {path:"adddata",component:AdddataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
