import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaCamareroComponent } from './components/camareros/alta-camarero/alta-camarero.component';
import { ListCamareroComponent } from './components/camareros/list-camarero/list-camarero.component';
import { AltaPedidoComponent } from './components/pedidos/alta-pedido/alta-pedido.component';
import { ListPedidoComponent } from './components/pedidos/list-pedido/list-pedido.component';
import { AltaProductoComponent } from './components/productos/alta-producto/alta-producto.component';
import { ListProductoComponent } from './components/productos/list-producto/list-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';


const routes: Routes = [
  {path:'', redirectTo:'', pathMatch: 'full'},
  {path:'altaCamarero', component: AltaCamareroComponent},
  {path:'camareros', component: ListCamareroComponent},
  {path:'altaPedido', component: AltaPedidoComponent},
  {path:'pedidos', component: ListPedidoComponent},
  {path:'altaProducto', component: AltaProductoComponent},
  {path:'productos', component: ListProductoComponent},
  {path:'editProducto/:codigo', component: EditProductoComponent},
  {path:'detallePedido/:id', component: DetallePedidoComponent},
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
