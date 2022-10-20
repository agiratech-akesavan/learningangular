import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  notification:any;
  constructor( public userService:UsernameService) {
    this.userService.UserName.subscribe(data => {
      this.notification=data;
    })
   }

  ngOnInit(): void {
  }



}
