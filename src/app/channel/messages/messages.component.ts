import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  ref: AngularFireList<string>;
  messages: Observable<string[]>;

  // messages: string[];

  constructor(private repo: AngularFireDatabase) {
    this.ref = this.repo.list('chattest1');
    this.messages = this.ref.valueChanges().map(items => items.sort((a, b) => +(b < a)));
  }


  ngOnInit() {
  }

}
