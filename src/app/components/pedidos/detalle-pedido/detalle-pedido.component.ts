import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pedido:Pedido = undefined;

  constructor(private pedidoService:PedidoService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

}
