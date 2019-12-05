import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'pedigest';
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [{
      label:"Camareros", 
      items:[
        {label: 'Alta camarero', icon: 'pi pi-user-plus', routerLink:["/altaCamarero"]},
        {label: 'Lista camareros', icon: 'pi pi-users', routerLink:["/camareros"]}
      ]
    },
    {
      label:"Pedidos",
      items:[
        {label: 'Alta pedido', icon: 'pi pi-fw pi-plus', routerLink:["/altaPedido"]},
        {label: 'Lista pedidos', icon: 'pi pi-bars', routerLink:["/pedidos"]}
      ]
    },
    {
      label:"Productos",
      items:[
        {label: 'Alta producto', icon: 'pi pi-fw pi-plus', routerLink:["/altaProducto"]},
        {label: 'Lista productos', icon: 'pi pi-bars', routerLink:["/productos"]}
      ]
    }
    ]
  }
}
