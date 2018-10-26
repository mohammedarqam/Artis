import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutUsPage } from '../about-us/about-us';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  gtHome(){
    this.navCtrl.setRoot(HomePage);
  }
  gtAbout(){
    this.navCtrl.setRoot(AboutUsPage);
  }
  gtContactUs(){
    this.navCtrl.setRoot(ContactPage);
  }

}
