import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;
  constructor(public navCtrl: NavController) {

    this.carros=[
      {nome:"Uno", preco:32000},
      {nome:"Fox", preco:75000},
      {nome:"HB20", preco:95000},
      {nome:"Cobalt", preco:70000},
      {nome:"Discovery", preco:10000},
    ];
  }

}
