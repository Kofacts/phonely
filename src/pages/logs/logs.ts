import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallLog } from '@ionic-native/call-log';

/**
 * Generated class for the LogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
})
export class LogsPage {
  public allLogs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public callLog: CallLog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogsPage');
  }

 //  getCallLogs()
 //  {
 //  	let filters = [{
 //    "name": "number",
 //    "value": ["0%","+234%"],
 //    "operator": "like",
	// }];

	// //this.callLog.getCallLog(filters, function(data) {
	//      //console.log(data);
	// //      this.allLogs = data;
	// // }, function() {
	// //      console.log('Error');
	// // });
 //  }

}
