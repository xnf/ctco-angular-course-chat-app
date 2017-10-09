import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {IMessage} from '../message';
import 'rxjs/add/operator/debounceTime';
import {UserService} from '../../shared/user.service';
import {ChannelService} from '../channel.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  isSendingMessage: boolean;
  messageForm = new FormGroup({
    message: new FormControl('', [Validators.required])
  });

  constructor(private channelService: ChannelService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.messageForm.get('message')
      .valueChanges
      .debounceTime(500)
      .subscribe(val => console.log(val));
  }

  submitForm() {
    this.isSendingMessage = true;
    this.channelService.postMessage(this.messageForm.get('message').value)
      .then(() => this.isSendingMessage = false);
  }

}
