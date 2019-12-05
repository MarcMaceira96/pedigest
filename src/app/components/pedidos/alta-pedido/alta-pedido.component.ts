import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Camarero } from 'src/app/models/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { LineaPedido } from 'src/app/models/lineaPedido';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  camareros: Camarero[] = undefined;
  lineaPedido:LineaPedido = new LineaPedido();
  productos:Producto[] = undefined;
  selectedCamarero:Camarero;
  selectedProducto:Producto;

  constructor(private pedidoService:PedidoService,
              private camareroService:CamareroService,
              private productoService:ProductoService,
              private router:Router) { }

  ngOnInit() {

    this.camareroService.getAll().subscribe(datos => {
      this.camareros = datos
      //console.log(datos)
    });

    this.productoService.getAll().subscribe(datos => {
      this.productos = datos
      //console.log(datos)
    });

    this.lineaPedido.cantidad = 1;
  };

  crearLinea(){

    if (this.pedido.lineasPedido){
      this.pedido.lineasPedido.push(this.lineaPedido);
    } else {
      this.pedido.lineasPedido = Array(this.lineaPedido);
    }

    this.lineaPedido = new LineaPedido();
    this.lineaPedido.cantidad = 1;
  };
  
  add() {

    this.pedido.fecha = new Date();
    this.pedidoService.create(this.pedido).subscribe(datos => console.log(datos));
    this.pedido = new Pedido();
  };

  setPrice(){
    
    this.lineaPedido.precio = this.lineaPedido.producto.precio;
  };

  eliminar(borrarLinea:LineaPedido){
    
    let count = 0
    for (let linea of this.pedido.lineasPedido){
      if (borrarLinea == linea){
        this.pedido.lineasPedido.splice(count,1)
      }
      count++;
    }
  };

}
