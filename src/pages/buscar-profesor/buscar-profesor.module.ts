import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarProfesorPage } from './buscar-profesor';

@NgModule({
  declarations: [
    BuscarProfesorPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarProfesorPage),
  ],
})
export class BuscarProfesorPageModule {}
