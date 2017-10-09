import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChannelService} from './channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channelId: string;

  constructor(private route: ActivatedRoute,
              private channelService: ChannelService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.channelId = params.id;
      this.channelService.getChannelId().next(this.channelId);
    });

  }

}
