import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphabetsPage } from '../alphabets/alphabets';
import { NumbersPage } from '../numbers/numbers';
import { TwoletterPage } from '../twoletter/twoletter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public displayPage:any;
  constructor(public navCtrl: NavController) {

  }

  alphabetsPage()
  {
  	this.displayPage = AlphabetsPage;
  	this.navCtrl.push(this.displayPage);
  }

  numbersPage()
  {
  	this.displayPage = NumbersPage;
  	this.navCtrl.push(this.displayPage);
  }

  twoLetterPage()
  {
  	this.displayPage = TwoletterPage;
  	this.navCtrl.push(this.displayPage);
  }



}
