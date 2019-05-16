import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar-profesor',
  templateUrl: 'buscar-profesor.html',
})
export class BuscarProfesorPage {
  lista = [];
  secciones_completas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.navParams.get('secciones_completas');
  }

  getItems(ev: any) {
    console.log(ev.target.value);
    let p = ev.target.value.toLowerCase();

    this.secciones_completas = this.lista.filter(seccion => {
      console.log(seccion);
      return seccion.profesor.toLowerCase().includes(p);
    });
    console.log(JSON.stringify(this.secciones_completas));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarProfesorPage');
  }

}
