import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import {ChannelService} from '../channel.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  constructor(public channelService: ChannelService) {
  }

  ngOnInit() {
  }


}
