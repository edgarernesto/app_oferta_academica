import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';
import { BuscarProfesorPage } from '../buscar-profesor/buscar-profesor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  materias = [];
  secciones_completas = [];
  
  infoPage = InfoPage;
  buscarPage = BuscarPage;
  buscarProfesorPage = BuscarProfesorPage;

  constructor(public navCtrl: NavController, public http: HttpClient, public http2: HttpClient) {
    this.getSeccionesCompletas();
  }

  getMaterias() {
    this.getMateria().subscribe( data => {
    this.materias = data['materias'];
    console.log(JSON.stringify(this.materias['0']))
    this.getSecciones();
    }, error => {
    console.log(JSON.stringify(error))
    });
  }

  getSeccionesCompletas() {
    this.getSeccionCompleta().subscribe( data => {
    this.secciones_completas = data['secciones'];
    console.log(JSON.stringify(this.secciones_completas['0']))
    }, error => {
    console.log(JSON.stringify(error))
    });
  }

  getMateria() {
    return this.http.get('/v1/materia')
  }

  getSeccionCompleta() {
    return this.http.get('/v1/seccion-completa')
  }

  info(seccion) {
      console.log('click');
      this.navCtrl.push(this.infoPage, {seccion: seccion});
    }

  search() {
      console.log('search');
      this.navCtrl.push(this.buscarPage, {
        secciones_completas: this.secciones_completas});
    }

  searchTeacher() {
      console.log('searchTeacher');
      this.navCtrl.push(this.buscarProfesorPage, {
        secciones_completas: this.secciones_completas,});
    }
}
