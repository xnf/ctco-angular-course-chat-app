import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChannelComponent} from './channel/channel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {
    path: 'channel',
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: ':id', component: ChannelComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
