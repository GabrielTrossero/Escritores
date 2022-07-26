import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db'
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[]{
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrTemp = ESCRITORES.filter(escritor => { //analizo si la persona pasa o no el filtro
        return escritor.pais === pPais; //ya directamente si es activo devuleve true
      });
      resolve(arrTemp);
    });
  }

  getById(escritorId): Promise<Escritor>{
    return new Promise((resolve, reject) => {
      const escritorFind = ESCRITORES.find(escritor => {
        return escritor.id === escritorId;
      });
      resolve(escritorFind);
    });
  }
}
