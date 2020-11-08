import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PersonaService } from '../../app/servicio/persona.service';
import{Router} from '@angular/router';
import{listaclienteI} from '../../app/model/listacliente.interface';
import {clienteI} from '../../app/model/paciente.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
clientess:listaclienteI[];


  constructor(private api:PersonaService, private router:Router) { }

  //editarForm = new FormGroup({
    //idCliente : new FormControl(''),
    //name: new FormControl(''),
    //apellido: new FormControl(''),
    //direccion: new FormControl(''),
    //telefono: new FormControl(''),
    //email: new FormControl(''),
  //});
  ngOnInit(): void {
    this.api.getAllCliente().subscribe(data=>{
      this.clientess= data;
    })
  }

  editarCliente(id){
    this.router.navigate(['editar', id]);
   
   //this.api.getSingleCliente(id).subscribe(data => {
    //console.log(data); 
    //this.datoscliente = data[0];
    // this.editarForm.setValue({

      //  'name' :  this.datoscliente.name,

     // });

      //console.log(this.editarForm.value);
      
      
    //})
  }

  nuevocliente(){
    this.router.navigate(['nuevo']);

  }
 
}
