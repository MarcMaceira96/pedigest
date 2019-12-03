import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Camarero } from 'src/app/models/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { LineaPedido } from 'src/app/models/lineaPedido';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

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

  constructor(private pedidoService:PedidoService,
              private camareroService:CamareroService,
              private productoService:ProductoService) { }

  ngOnInit() {
    this.camareroService.getAll().subscribe(datos => {
      this.camareros = datos
      console.log(datos)
    });
    this.productoService.getAll().subscribe(datos => {
      this.productos = datos
      console.log(datos)
    });
    this.lineaPedido.cantidad = 1;
  }

  crearLinea(){
    if (this.pedido.lineasPedido){
      this.pedido.lineasPedido.push(this.lineaPedido);
    } else {
      this.pedido.lineasPedido = Array(this.lineaPedido);
    }
    this.lineaPedido = new LineaPedido();
    this.lineaPedido.cantidad = 1;
  }
  
  add() {
    this.pedido.fecha = new Date();
    this.pedidoService.create(this.pedido).subscribe(datos => console.log(datos));
  }

  setPrice(){
    this.lineaPedido.precio = this.lineaPedido.producto.precio;
  }

}
