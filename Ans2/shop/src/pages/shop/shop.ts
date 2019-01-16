import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../Models/Item';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  public Data: Item
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get<Item>("http://localhost:5000/api/Item")
      .subscribe((it) => {
        this.Data = it;
        console.log(this.Data)
      },
        error => {
        });
  }

  cart() {
    console.log(this.Data)
    this.http.post<Item>("http://localhost:5000/api/ItemInCart",this.Data).subscribe(
        it => {
          console.log("Success")
        },
        error => {
        });
    this.navCtrl.push("CartPage")
  }
}
