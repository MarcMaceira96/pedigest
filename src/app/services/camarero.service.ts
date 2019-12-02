import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camarero } from '../models/camarero';
import { Observable } from 'rxjs';

const URL = 'http://10.250.5.12:8086/api/camareros/';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Camarero[]> {
    return this.http.get<Camarero[]>(URL);
  }

  create(camarero: Camarero) :Observable<Camarero> {
    return this.http.post<Camarero>(URL, camarero);
  }
}
