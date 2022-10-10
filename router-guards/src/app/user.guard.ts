import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(public value:AppComponent){
    this.canActivate(value);
  }
  canActivate(value:any) {
    return true;
  }
  
}
