import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferenceComponent } from './reference/reference.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
