import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveDirective } from './directive/attribute-directive.directive';
import { RendererDirectiveDirective } from './directive/renderer-directive.directive';
import { HostDirective } from './directive/host.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveDirective,
    RendererDirectiveDirective,
    HostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
