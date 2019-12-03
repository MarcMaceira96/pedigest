import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})
export class ListPedidoComponent implements OnInit {

  pedidos:Pedido[] = undefined;

  constructor(private pedidoService:PedidoService) { }

  ngOnInit() {
    this.pedidoService.getAll().subscribe(pedidos => {
      this.pedidos = pedidos;
      console.log(pedidos)
    });
  }

  precioTotal(pedido:Pedido):any{
    let precio:number = 0;
    for (let linea of pedido.lineasPedido){
      precio += (linea.cantidad * linea.precio)
    }
    return precio;
  }

}
