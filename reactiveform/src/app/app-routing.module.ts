import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './website/product/product.component';
import { WebsiteComponent } from './website/website.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"sign",component:SignupComponent},
  {path:"website",component:WebsiteComponent,canActivate:[AuthGuard]},
  {path:"website/product/:id", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
