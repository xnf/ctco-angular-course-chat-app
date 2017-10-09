import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChannelComponent} from './channel.component';
import {MessageFormComponent} from './message-form/message-form.component';
import {MessageListComponent} from './message-list/message-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ListComponent } from './list/list.component';
import {ChannelService} from './channel.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ChannelService
  ],
  exports: [ChannelComponent],
  declarations: [ChannelComponent, MessageFormComponent, MessageListComponent, ListComponent]
})
export class ChannelModule {
}
