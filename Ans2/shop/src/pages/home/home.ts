import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  item(){
    this.navCtrl.push("ItemlistPage")
  }

  shop(){
    this.navCtrl.push("ShopPage")
  }
}
