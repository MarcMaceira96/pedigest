import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaCamareroComponent } from './components/camareros/alta-camarero/alta-camarero.component';
import { ListCamareroComponent } from './components/camareros/list-camarero/list-camarero.component';
import { AltaPedidoComponent } from './components/pedidos/alta-pedido/alta-pedido.component';
import { ListPedidoComponent } from './components/pedidos/list-pedido/list-pedido.component';
import { ListProductoComponent } from './components/productos/list-producto/list-producto.component';
import { AltaProductoComponent } from './components/productos/alta-producto/alta-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListCamareroComponent,
    AltaPedidoComponent,
    ListPedidoComponent,
    ListProductoComponent,
    AltaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
