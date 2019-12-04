import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


//const URL = 'http://10.250.5.12:8086/api/pedidos/';
const apiURL = environment.apiURL + "/pedidos/";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  obs1: Observable<Pedido> = new Observable;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(apiURL);
  }

  read(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(apiURL + id);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(apiURL, pedido);
  }
}
