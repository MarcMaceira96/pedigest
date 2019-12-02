import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const URL = 'http://10.250.5.12:8086/api/pedidos/';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedido> {
    return this.http.get<Pedido>(URL);
  }
}
