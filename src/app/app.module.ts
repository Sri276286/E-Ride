import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TakeRideComponent } from './component/take-ride/take-ride.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { ShareRideComponent } from './component/share-ride/share-ride.component';
import { RideService, ProfileService, UserService } from '../services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TakeRideComponent,
    ShareRideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [RideService, ProfileService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
