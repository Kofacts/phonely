import { Component } from '@angular/core';
import { NavController, PopoverController, ActionSheetController, ModalController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { AboutPage } from '../about/about';
import { LogsPage } from '../logs/logs';
import { ViewcontactPage } from '../viewcontact/viewcontact';



import { CallNumber } from '@ionic-native/call-number';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-homecontents',
  templateUrl: 'homecontents.html',
})
export class HomecontentsPage {
  public displayPage: any;
  public data:any;
  public items:any;
  public telephone: any;
  public allContacts:any;
  public phoneNumber:any;
  public tab1Root = HomecontentsPage;
  public tab2Root = LogsPage;
  public tab3Root = PopoverPage;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public contactsD: Contacts, public popoverCtrl: PopoverController, public actionCtrl: ActionSheetController, private callNumber: CallNumber) {
  	this.fetchContacts();
  	this.initializeItems();

  }

  showAboutPage()
  {
  	this.displayPage=AboutPage;
  	this.navCtrl.push(this.displayPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  callPhone(telephone)
  {
  	this.callNumber.callNumber(telephone, true)
  		.then(res => console.log('Launched dialer!', res))
  		.catch(err => console.log('Error launching dialer', err));
  }

  fetchContacts()
  {
  	this.contactsD.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
    .then(data => {
      this.allContacts = data
    })
    .catch(err => console.log('Cordova did not load',err));
    
    //console.log(this.allContacts);
  }

  initializeItems()
  {
  	this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ]
  }

  getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();
  var q = searchbar.srcElement.value;

  return this.items.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}

  viewContact(data)
  {
  	
    const actionSheet = this.actionCtrl.create({
      title: 'What i want to do',
      buttons: [
        {
          text: 'Call Number',
          role: 'destructive',
          icon: 'call',
          handler: () => {
            console.log('Destructive clicked');
            //trigger the call function
            this.telephone = data.phoneNumbers[0].value;
            this.callPhone(this.telephone);
          }
        },{
          text: 'View Contact Details',
          icon: 'calculator',
          handler: () => {
            this.fetchContactData(data);
          }
        }      ]
    });
    actionSheet.present();
  
  	this.data = data;
  	console.log(this.data);
  }

  fetchContactData(data)
  {
  	this.displayPage = ViewcontactPage;
  	// this.navCtrl.push(this.displayPage, {data});
  	let profileModal = this.modalCtrl.create(this.displayPage, { data });
    profileModal.present();
  }

  determineNetwork(phoneNumber)
  {
  	//the if construct
  	var tel_no = phoneNumber.replace(/ +/g, "");
  	var new_tel = tel_no.replace("+234","0");
  	var firstFour = new_tel.substring(0,4);
  	var img = "";
  	var xx ="";
  	if(firstFour == '0708' || firstFour == '0812' || firstFour == '0701' || firstFour == '0802' || firstFour == '0808' || firstFour == '0902' || firstFour == '0907')
  	{
  		img = "img/airtel.png"

  	}
  	else if(firstFour == '0703' || firstFour == '0803' || firstFour == '0706' || firstFour == '0806' || firstFour == '0810' || firstFour == '0813' || firstFour == '0814' || firstFour == '0816' || firstFour == '0903' || firstFour == '0906')
  	{
  		img = "img/mtn.png";
  	}
  	else if(firstFour == '0809' || firstFour == '0817' || firstFour == '0818' || firstFour == '0909' || firstFour == '0908')
  	{
  		img = "img/etisalat.png";
  	}
  	else if(firstFour == '0705' || firstFour == '0805' || firstFour == '0807' || firstFour == '0811' || firstFour == '0815' || firstFour == '0905')
  	{
  		img = "img/glo.png";
  	}
  	else
  	{
  		img = "img/noimage.png";
  	}

  	var data = {
  		'img': img, 
  		'no': firstFour
  	};

  	return img;
  }

}
