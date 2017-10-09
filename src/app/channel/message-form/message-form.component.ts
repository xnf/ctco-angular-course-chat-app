import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {IMessage} from '../message';
import 'rxjs/add/operator/debounceTime';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  ref: AngularFireList<IMessage>;
  @Input() channelId;

  messageForm = new FormGroup({
    message: new FormControl()
  });

  constructor(private fb: AngularFireDatabase, private userService: UserService) {
    this.ref = this.fb.list('messages-' + this.channelId);
  }

  ngOnInit() {
    this.messageForm.get('message')
      .valueChanges
      .debounceTime(500)
      .subscribe(val => console.log(val));
  }

  submitForm() {
    this.ref.push({
      date: +(new Date()),
      name: this.userService.info.name,
      text: this.messageForm.get('message').value
    });
  }

}
