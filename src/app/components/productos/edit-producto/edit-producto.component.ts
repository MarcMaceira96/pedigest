import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto:Producto;
  codigo:number;
  categorias:any[] = [];

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private productoService:ProductoService,
              private categoriaService:CategoriaService) { }

  ngOnInit() {
    
    this.categoriaService.getAll().subscribe(datos => {
      //this.categorias = datos;
      for (let categoria of datos){
        this.categorias.push({label:categoria, value:categoria})
      }
    });

    this.activatedRoute.params.subscribe(x =>{
      this.productoService.read(Number(x.codigo)).subscribe(datos => {
        this.producto = datos;
        this.producto.fechaAlta = new Date(datos.fechaAlta);
      })

      
    });
  }

  edit(){
    this.productoService.create(this.producto).subscribe(datos => {
      console.log(datos);
      this.router.navigateByUrl('/productos');
    })
  };

}
