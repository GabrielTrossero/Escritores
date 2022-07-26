import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.escritor = await this.escritoresService.getById(parseInt(params.escritorId));//parse: para pasarlo a int, ya que puede venir en string
    });
  }

}
