import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { LoginGuard } from './login.guard';
import { UserPageComponent } from './user-page/user-page.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  // {path:"",component:AppComponent},
  {path:"login",component:AdminPageComponent,canActivate:[LoginGuard]},
  {path:"user",component:UserPageComponent,canActivate:[UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
