import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomecontentsPage } from './homecontents';

@NgModule({
  declarations: [
    HomecontentsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomecontentsPage),
  ],
})
export class HomecontentsPageModule {}
