import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../Models/Item';

/**
 * Generated class for the ItemlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemlist',
  templateUrl: 'itemlist.html',
})
export class ItemlistPage {

  public Data: Item

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: HttpClient) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ItemlistPage');
    this.http.get<Item>("http://localhost:5000/api/Item")
      .subscribe((it) => {
        this.Data = it;
        console.log("SS" + this.Data)
      },
        error => {
        });
  }

  add() {
    const modal = this.modalCtrl.create("DlgAddPage");
    modal.onDidDismiss(data => {
      this.http.get<Item>("http://localhost:5000/api/Item")
        .subscribe((it) => {
          this.Data = it;
          console.log("SS" + this.Data)
        },
          error => {
          });
    });
    modal.present();
  }
}
