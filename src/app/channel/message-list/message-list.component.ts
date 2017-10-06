import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {IMessage} from '../message';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  ref: AngularFireList<IMessage>;
  messages$: Observable<IMessage[]>;
  messages: IMessage[] = [];

  constructor(private fb: AngularFireDatabase) {
    this.ref = this.fb.list('messages');
    this.messages$ = this.ref.valueChanges();
    this.messages$
      .flatMap(arr => Observable.from(arr))
      .subscribe((msg: IMessage) => {
        this.messages.push(msg);
      });
  }

  ngOnInit() {
  }

}
