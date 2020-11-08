import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {clienteI} from '../../model/paciente.interface';
import {PersonaService} from '../../servicio/persona.service';
import {FormGroup,FormControl, Validator} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router:Router, private api:PersonaService) { }
  cliente:clienteI;
  editarForm = new FormGroup({
    idCliente : new FormControl(''),
    name: new FormControl(''),
    apellido: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit(): void {
    let clienteid= this.activerouter.snapshot.paramMap.get('id');
    console.log(clienteid);
      this.api.getSingleCliente(clienteid).subscribe(data => {
        this.cliente = data[0];
     console.log(data); 
     
      this.editarForm.setValue({
        'idCliente' : data.idCliente,
        'name' :  data.name,
        'apellido' : data.apellido,
        'direccion' : data.direccion,
        'telefono' :  data.telefono,
        'email' :  data.email,


      });


   
      
    //})
  });
 
  }
  postForm(form:clienteI){
   this.api.putCliente(form).subscribe(data =>{
    console.log(data);
   });
  

  }
  eliminar(identificador){







   // let datos:clienteI = this.editarForm.value;
   /* let clienteid= this.activerouter.snapshot.paramMap.get('id');
    this.api.deleteClient(clienteid).subscribe(data =>{
      this.editarForm.setValue({
        'idCliente' : data.idCliente,
        'name' :  data.name,
        'apellido' : data.apellido,
        'direccion' : data.direccion,
        'telefono' :  data.telefono,
        'email' :  data.email,


      });

    })*/
  }

}
 