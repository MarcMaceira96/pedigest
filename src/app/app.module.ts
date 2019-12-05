import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './primeng/primeng.module';


import { AppComponent } from './app.component';
import { AltaCamareroComponent } from './components/camareros/alta-camarero/alta-camarero.component';
import { ListCamareroComponent } from './components/camareros/list-camarero/list-camarero.component';
import { AltaPedidoComponent } from './components/pedidos/alta-pedido/alta-pedido.component';
import { ListPedidoComponent } from './components/pedidos/list-pedido/list-pedido.component';
import { ListProductoComponent } from './components/productos/list-producto/list-producto.component';
import { AltaProductoComponent } from './components/productos/alta-producto/alta-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';




@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListCamareroComponent,
    AltaPedidoComponent,
    ListPedidoComponent,
    ListProductoComponent,
    AltaProductoComponent,
    EditProductoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
