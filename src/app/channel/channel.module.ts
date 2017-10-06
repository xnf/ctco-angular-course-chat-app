import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageFormComponent} from './message-form/message-form.component';
import {ChannelComponent} from './channel/channel.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {MessagesComponent} from './messages/messages.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [ChannelComponent],
  declarations: [MessageFormComponent, ChannelComponent, MessagesComponent]
})
export class ChannelModule {
}
