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
    documento: new FormControl(''),
    telefono: new FormControl(''),
    sexo: new FormControl(''),
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
        'documento' : data.documento,
        'telefono' :  data.telefono,
        'sexo' :  data.sexo,


      });


   
      
    //})
  });
 
  }
  postForm(form:clienteI){
   this.api.putCliente(form).subscribe(data =>{
    console.log(data);
   });

  

  }
  eliminar(){
    let datos:clienteI = this.editarForm.value;
    this.api.deleteClient(datos).subscribe(data =>{
    console.log(data);

    });
  }

  salir(){
    this.router.navigate(['persona']);
  }

}
 