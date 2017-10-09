import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../channel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public channelService: ChannelService) {

  }

  ngOnInit() {
    /**
     * output first level of 'messages' list. Yes, it is expensive comparing to making separate list for channels, but this is just a homework :)ļ
     */
  }

}
