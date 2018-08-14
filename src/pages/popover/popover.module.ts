import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    PopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPage),
    SuperTabsModule,
  ],
})
export class PopoverPageModule {}
