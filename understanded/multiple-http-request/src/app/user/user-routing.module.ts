import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserCompanyDetailComponent } from './user-company-detail/user-company-detail.component';
import { UserContactDetailComponent } from './user-contact-detail/user-contact-detail.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'person/:id',component:PersonComponent},
  {path:'address',component:UserAddressComponent},
  {path:'company',component:UserCompanyDetailComponent},
  {path:'contact',component:UserContactDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
