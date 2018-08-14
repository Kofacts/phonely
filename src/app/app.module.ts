import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PopoverPage } from '../pages/popover/popover';
import { AboutPage } from '../pages/about/about';
import { ViewcontactPage } from '../pages/viewcontact/viewcontact';
import { LogsPage } from '../pages/logs/logs';
import { HomecontentsPage } from '../pages/homecontents/homecontents';
import { ContactdetailsPage } from '../pages/contactdetails/contactdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts } from '@ionic-native/contacts';
import { CallNumber } from '@ionic-native/call-number';
import { AdMobFree } from '@ionic-native/admob-free';
import { CallLog } from '@ionic-native/call-log';

import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PopoverPage,
    AboutPage,
    ViewcontactPage,
    LogsPage,
    HomecontentsPage,
    ContactdetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PopoverPage,
    AboutPage,
    ViewcontactPage,
    LogsPage,
    HomecontentsPage,
    ContactdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    CallNumber,
    AdMobFree,
    CallLog,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
