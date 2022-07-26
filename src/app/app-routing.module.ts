import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'escritores'}, //ruta raiz 
  {path: 'escritores', component: ListaEscritoresComponent},
  {path: 'escritores/:escritorId', component: DetalleComponent},
  {path: '**', redirectTo: 'escritores'} // ruta por defecto cuando ponemos una ruta "mal"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
