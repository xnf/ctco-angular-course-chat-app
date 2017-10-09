import {Injectable} from '@angular/core';
import {IUser} from './user';

const STORAGE_KEY_FOR_NAME = 'user_name';

@Injectable()
export class UserService {

  info: IUser = {name: window.localStorage.getItem(STORAGE_KEY_FOR_NAME) || this.askUserForName()}

  constructor() {

  }

  askUserForName() {
    const name = window.prompt('What is your name?');
    if (name && name.length > 0) {
      window.localStorage.setItem(STORAGE_KEY_FOR_NAME, name);
      return name;
    } else {
      this.askUserForName();
    }
  }

}
