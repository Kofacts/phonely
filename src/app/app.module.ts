import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlphabetsPage } from '../pages/alphabets/alphabets';
import { NumbersPage } from '../pages/numbers/numbers';
import { TwoletterPage } from '../pages/twoletter/twoletter';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphabetsPage,
    NumbersPage,
    TwoletterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlphabetsPage,
    NumbersPage,
    TwoletterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
