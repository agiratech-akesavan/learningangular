import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from '../material/material.module';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserCompanyDetailComponent } from './user-company-detail/user-company-detail.component';
import { UserContactDetailComponent } from './user-contact-detail/user-contact-detail.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    UserComponent,
    UserAddressComponent,
    UserCompanyDetailComponent,
    UserContactDetailComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
