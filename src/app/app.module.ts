import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import {AngularFireModule} from 'angularfire2'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { BookingProvider } from '../providers/booking/booking';
import {HttpClientModule} from '@angular/common/http';
var config = {
  apiKey: "AIzaSyDibwTZvgCLp7iolRF-xJPz6F6KRjOOfHE",
  authDomain: "herloc-46207.firebaseapp.com",
  databaseURL: "https://herloc-46207.firebaseio.com",
  projectId: "herloc-46207",
  storageBucket: "herloc-46207.appspot.com",
  messagingSenderId: "50367460104"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      RoundProgressModule,
      HttpClientModule,
      AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookingProvider
  ]
})
export class AppModule {}
