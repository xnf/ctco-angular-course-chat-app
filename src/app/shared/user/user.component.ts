import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  get user(): IUser {
    return this.userService.info;
  }

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  helloMyNameIs() {
    window.alert(`Hello, my name is\n${this.user.name}`);
  }

}
