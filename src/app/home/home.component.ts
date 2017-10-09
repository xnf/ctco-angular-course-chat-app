import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../channel/channel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  createNew() {
    const title = window.prompt('Name of the new channel');
    if (title) {
      window.alert('Add code to create new channel....');
    }
  }
}
