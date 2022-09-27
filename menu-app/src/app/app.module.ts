import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RescipeComponent } from './rescipe/rescipe.component';
import { RescipeListComponent } from './rescipe/rescipe-list/rescipe-list.component';
import { RescipeItemComponent } from './rescipe/rescipe-item/rescipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RescipeComponent,
    RescipeListComponent,
    RescipeItemComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
