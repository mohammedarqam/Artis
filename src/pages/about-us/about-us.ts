import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

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
