import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  productos: Producto[] = undefined;

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productoService.getAll().subscribe(datos => {
      this.productos = datos;
    })
  }

}
