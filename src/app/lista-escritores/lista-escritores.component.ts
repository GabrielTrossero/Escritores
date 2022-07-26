import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    //this.arrEscritores = this.escritoresService.getAll();
    
    /* MÉTODO TRADICIONAL
    this.escritoresService.getAllPromise()
      .then(escritores => {
        this.arrEscritores = escritores;
      });*/

    // MÉTODO MODERNO
    this.arrEscritores = await this.escritoresService.getAllPromise();
  }

  async onChange($event){
    if ($event.target.value === 'todos') {
      this.ngOnInit();
    }
    else {
      this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
    }
  }

}
