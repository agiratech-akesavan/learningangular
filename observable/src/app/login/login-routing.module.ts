import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadComponent } from './bad/bad.component';
import { FailureComponent } from './failure/failure.component';
import { LoginComponent } from './login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{path:"success",component:SuccessComponent},
{path:"failure",component:FailureComponent},
{path:"bad",component:BadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
