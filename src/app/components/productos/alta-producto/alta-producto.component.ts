import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  producto:Producto = new Producto();
  categorias:string[] = undefined;

  constructor(private productoService:ProductoService,
              private categoriaService:CategoriaService,
              private router:Router,) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(datos => this.categorias = datos);
  }

  crear(){
    this.productoService.create(this.producto).subscribe(data => console.log(data));
    this.router.navigateByUrl("/productos")
  }

}
