import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  ref: AngularFireList<string>;

  form: FormGroup = new FormGroup({
    text: new FormControl('')
  });

  constructor(private repo: AngularFireDatabase) {
    this.ref = this.repo.list('chattest1');

  }

  ngOnInit() {
  }

  submit() {
    this.ref.push(this.form.get('text').value);
  }

}
