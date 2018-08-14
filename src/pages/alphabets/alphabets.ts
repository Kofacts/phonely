import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the AlphabetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alphabets',
  templateUrl: 'alphabets.html',
})
export class AlphabetsPage {
  public alphabets:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech) {
  	this.alphabets = [
  		{ letter: 'A', isFor: 'Apple', 'img': 'img/apple.png', 'meaning': 'Apple is a fruit that is taken by adults and is used for chyking' },
  		{ letter: 'B', isFor: 'Ball', 'img': 'img/ball.png', 'meaning': 'Balling as par bolaji' },
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetsPage');
  }

  textToSpeech(word)
  {
  	const options = {
    	text: word,
        rate: 0.1
    }
  	this.tts.speak(options)
	  .then(() => console.log('Success'))
	  .catch((reason: any) => console.log(reason));
  }

}
