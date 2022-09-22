import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdPropertyComponent } from './id-property/id-property.component';
import { ClassPropertyComponent } from './class-property/class-property.component';
import { StylePropertyComponent } from './style-property/style-property.component';
import { EventPropertyComponent } from './event-property/event-property.component';

@NgModule({
  declarations: [
    AppComponent,
    IdPropertyComponent,
    ClassPropertyComponent,
    StylePropertyComponent,
    EventPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
