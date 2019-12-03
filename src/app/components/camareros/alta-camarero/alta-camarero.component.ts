import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/models/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {

  camarero:Camarero = new Camarero();

  constructor(private camareroService:CamareroService,
              private router:Router) { }

  ngOnInit() {
 
  }

  alta() {
    this.camareroService.create(this.camarero).subscribe(data => console.log(data));
    this.router.navigateByUrl("/camareros")
  }

}
