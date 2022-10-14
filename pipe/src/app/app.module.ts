import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { InpurePipeComponent } from './inpure-pipe/inpure-pipe.component';
import { AppendPipe, inpurePipe } from './inpure-pipe/inpure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PurePipeComponent,
    InpurePipeComponent,
    AppendPipe,
    inpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
