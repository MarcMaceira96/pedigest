import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';
import { LineaPedido } from 'src/app/models/lineaPedido';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  totalPedido:number = 0;

  constructor(private pedidoService: PedidoService,
              private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(x => {
      this.pedidoService.getPedido(Number(x.id)).subscribe(datos => {
        console.log(datos);
        this.pedido = datos;

        for(let lp of this.pedido.lineasPedido){
          this.totalPedido += lp.cantidad * lp.precio;
        }
      });
    });

  }

}
