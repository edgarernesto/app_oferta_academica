import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  secciones_completas = [];
  lista_s = [];
  infoPage = InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista_s = this.navParams.get('secciones_completas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev: any) {
    console.log(ev.target.value);
    let m = ev.target.value.toLowerCase();

    this.secciones_completas = this.lista_s.filter(materia => {
      return materia.materia.toLowerCase().includes(m);
    });
    // console.log(JSON.stringify(this.secciones));
  }

  info(seccion) {
    this.navCtrl.push(this.infoPage, {seccion: seccion});
  }
}
