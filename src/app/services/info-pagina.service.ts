import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {

     this.cargarInfo();
     this.cargasEquipo();
   }

   private cargarInfo() {

    console.log('Service infoPagina successful');
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

     this.cargada = true;
     this.info = resp;


    });

   }

   private cargasEquipo() {

    console.log('Service infoPagina successful');
    this.http.get('https://sebas-store.firebaseio.com/miembros.json')
    .subscribe( (resp: any[]) => {

     this.equipo = resp;



    });

   }
}
