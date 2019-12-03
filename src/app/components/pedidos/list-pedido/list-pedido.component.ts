import { Component, OnInit } from '@angular/core';

import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})
export class ListPedidoComponent implements OnInit {

  pedidos: Pedido[] = undefined;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getAll().subscribe(datos => {
      console.log(datos);
      this.pedidos = datos;
    });

    /*this.pedidoService.getPedido(1).subscribe(datos => {
      let precioTotal: number;
      console.log(datos);
      for(let i = 0; i < datos.lineasPedido.length; i++) {
        precioTotal += datos.lineasPedido[i].precio;
        console.log(precioTotal);
      }
      console.log(precioTotal);
      this.pedidos[1].precioTotal;
    })*/
  }

}
