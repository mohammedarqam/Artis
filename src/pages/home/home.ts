import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
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
