import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../Models/Item';

/**
 * Generated class for the DlgAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-add',
  templateUrl: 'dlg-add.html',
})
export class DlgAddPage {

  public product: string
  public price: number
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgAddPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.http.post<Item>("http://localhost:5000/api/Item",
      {
        name: this.product,
        price: this.price
      }).subscribe(
        it => {
          console.log("Success")
        },
        error => {
        });
    this.viewCtrl.dismiss();
  }
}
