import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ChidrenGuard } from './guard/chidren.guard';
import { RoleGuard } from './guard/role.guard';
import { DetailComponent } from './home/detail/detail.component';
import { EditComponent } from './home/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[AuthGuard],
  canActivateChild:[ChidrenGuard],
  canDeactivate:[ChidrenGuard],
    children:[
      {path:"edit",component:EditComponent},
      {path:"detail",component:DetailComponent},
    ]
  },
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"home/user-detail",component:UserDetailComponent,canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

