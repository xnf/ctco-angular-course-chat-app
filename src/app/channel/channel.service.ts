import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {IMessage} from './message';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs/add/operator/do';
import {UserService} from '../shared/user.service';

@Injectable()
export class ChannelService {

  ref: AngularFireList<IMessage>;
  channelId$: ReplaySubject<string> = new ReplaySubject(1);

  channelMessages: IMessage[] = [];
  channelMessages$: Observable<IMessage[]>;

  constructor(private fb: AngularFireDatabase, private userService: UserService) {
    this.channelId$.subscribe(channelId => this.fetchMessages(channelId));
  }

  getMessages() {
    return this.channelMessages;
  }

  getChannels() {

  }

  getChannelId() {
    return this.channelId$;
  }

  public postMessage(message: string) {
    return this.ref.push({
      date: +(new Date()),
      name: this.userService.info.name,
      text: message
    });
  }

  private fetchMessages(channelId: string) {
    return new Promise((resolve) => {
      this.ref = this.fb.list('messages/' + channelId);
      this.channelMessages$ = this.ref.valueChanges<IMessage>();
      this.channelMessages$
        .do(() => this.channelMessages = [])
        .flatMap(arr => Observable.from(arr))
        .subscribe((msg: IMessage) => {
          this.channelMessages.unshift(msg);
        });
      resolve(this.ref);
    });
  }

}
