import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/models/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-list-camarero',
  templateUrl: './list-camarero.component.html',
  styleUrls: ['./list-camarero.component.css']
})
export class ListCamareroComponent implements OnInit {

  camareros:Camarero[] = undefined;

  constructor(private camareroService:CamareroService) { }

  ngOnInit() {
    this.camareroService.getCamareros().subscribe(datos => {
      this.camareros = datos;
    })
  }

}
