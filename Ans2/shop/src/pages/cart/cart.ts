import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../Models/Item';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public Data: Item
  public Total: any
  public Discount: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get<Item>("http://localhost:5000/api/ItemInCart")
      .subscribe((it) => {
        this.Data = it;
        console.log(this.Data)
        this.http.get("http://localhost:5000/api/ItemInCart/xx")
          .subscribe((it) => {
            this.Total = it;
            console.log(this.Data)
            this.http.get("http://localhost:5000/api/ItemInCart/dis")
              .subscribe((it) => {
                this.Discount = it;
                console.log(this.Data)
              },
                error => {
                });
          },
            error => {
            });
      },
        error => {
        });
  }

  ok(){
    this.http.delete<Item>("http://localhost:5000/api/ItemInCart").subscribe(
      it => {
        this.navCtrl.popToRoot()
      }, error => {
      });
  }
}
