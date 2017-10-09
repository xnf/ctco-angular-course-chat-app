import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {IMessage} from '../message';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import * as firebase from 'firebase';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, AfterContentChecked {

  ref: AngularFireList<IMessage>;
  messages$: Observable<IMessage[]>;
  messages: IMessage[] = [];
  @Input() channelId;

  constructor(private fb: AngularFireDatabase) {
    this.ref = this.fb.list('messages-' + this.channelId);
    this.messages$ = this.ref.valueChanges<IMessage>();
    this.messages$
      .flatMap(arr => Observable.from(arr))
      .subscribe((msg: IMessage) => {
        this.messages.unshift(msg);
      });
  }

  ngAfterContentChecked(){
    this.ref = this.fb.list('messages-' + this.channelId);
    this.messages$ = this.ref.valueChanges<IMessage>();
    this.messages$
      .flatMap(arr => Observable.from(arr))
      .subscribe((msg: IMessage) => {
        this.messages.unshift(msg);
      });
  }

  ngOnInit() {
  }

}
