import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';

const URL = 'http://10.250.5.12:8086/api/productos/';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getAll(): Observable <Producto[]> {
    return this.http.get<Producto[]>(URL);
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(URL, producto);
  }

  read(codigo:number):Observable<Producto>{
    return this.http.get<Producto>(URL + codigo);
  }

  /*edit(producto: Producto): Observable<Producto>{
    return this.http.
  }*/
}
