import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Money } from '../../models/model';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  public Data: Money
  public inter: any
  public loan: number
  public year: number

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.inter = this.navParams.get('data')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  result() {
    this.http.post<Money>("http://localhost:5000/api/Money",
      {
        year: this.year,
        loan: this.loan,
        interest: this.inter
      }).subscribe(
        it => {
          this.http.get<Money>("http://localhost:5000/api/Money")
            .subscribe((it) => {
              this.Data = it;
              console.log("SS" + this.Data)
            },
              error => {
              });
        },
        error => {
        });
  }

  back() {
    this.http.delete<Money>("http://localhost:5000/api/Money").subscribe(
      it => {
        this.navCtrl.pop()
      }, error => {
      });
  }
}
