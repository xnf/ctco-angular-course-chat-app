import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: IUser = {name: "User name from localStorage should appear here"};

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    // Check for user name or make new using window.prompt();
  }

  helloMyNameIs() {
    window.alert(`Hello, my name is\n${this.user.name}`);
  }

}
