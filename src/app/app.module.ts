import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChannelModule} from './channel/channel.module';
import {SharedModule} from './shared/shared.module';
import {UserService} from './shared/user.service';
import {RouterModule} from '@angular/router';
import {ChannelComponent} from './channel/channel.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChannelModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', redirectTo: ''},
      {path: 'channel', redirectTo: ''},
      {path: 'channel/:id', component: ChannelComponent}
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
