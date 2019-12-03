import { Camarero } from './camarero';
import { LineaPedido } from './lineaPedido';

export class Pedido {

    camarero:Camarero;
    fecha:Date;
    id:number;
    lineasPedido:LineaPedido[];
    precioTotal:number;
    mesa:number;
}