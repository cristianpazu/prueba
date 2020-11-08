import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonaComponent} from '../app/persona/persona.component';
import {EditarComponent} from './vistas/editar/editar.component';
import {NuevoComponent} from './vistas/nuevo/nuevo.component';


const routes: Routes = [
  {path: '', redirectTo:'persona', pathMatch:'full'},
  {path:'persona', component:PersonaComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar/:id', component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompomets =[NuevoComponent,EditarComponent]
