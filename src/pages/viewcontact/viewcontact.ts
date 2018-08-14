import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactdetailsPage } from '../contactdetails/contactdetails';
/**
 * Generated class for the ViewcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcontact',
  templateUrl: 'viewcontact.html',
})
export class ViewcontactPage {
  public allData: any;
  public tab1Root = ContactdetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewcontactPage');
  }

  getUserData()
  {
  	this.allData = this.navParams.get('data');
  	return this.allData;
  }
  goBack() {
	this.navCtrl.pop();
	}
}
