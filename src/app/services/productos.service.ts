import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();



   }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://sebas-store.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[] ) => {
        this.producto = resp;
        setTimeout(() => {
         this.cargando = false;
        }, 2000);

    });

     });

  }

  getProducto( id: string) {

    return this.http.get(`https://sebas-store.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto(termino: string) {
    if (this.producto.length === 0) {

        this.cargarProductos().then(() => {

          this.filtrarProductos( termino );

        });
    } else {
      this.filtrarProductos( termino );

    }

  }
  private filtrarProductos(termino: string ) {

        // console.log(this.producto);
        this.productoFiltrado = [];
        termino = termino.toLocaleLowerCase();

        this.producto.forEach( prod => {

          const tituloLower = prod.titulo.toLocaleLowerCase();

          if (prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino) >= 0) {

      this.productoFiltrado.push( prod );

      }
});

  }
}
