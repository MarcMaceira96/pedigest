import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Camarero } from 'src/app/models/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  camareros: Camarero[] = undefined;

  constructor(private pedidoService: PedidoService,
              private camareroService: CamareroService) { }

  ngOnInit() {
    this.camareroService.getAll().subscribe(datos => {
      this.camareros = datos
    });
  }

  add() {
    this.pedidoService.create(this.pedido).subscribe(datos => console.log(datos));
  }

}
