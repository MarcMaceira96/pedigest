import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL = 'http://10.250.5.12:8086/api/categorias/';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(URL);
  }
}
