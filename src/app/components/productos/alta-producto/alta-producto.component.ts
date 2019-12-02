import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  producto:Producto = new Producto();

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
  }

  crear(){
    this.productoService.create(this.producto).subscribe(data => console.log(data));
  }

}
