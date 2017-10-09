import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channelId: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
    this.route.params.subscribe(params => this.channelId = params.id);
  }

  ngOnInit() {
  }

}
