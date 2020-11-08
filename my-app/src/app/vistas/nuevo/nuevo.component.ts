import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {clienteI} from '../../model/paciente.interface';
import {PersonaService} from '../../servicio/persona.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nuevoForm = new FormGroup({
    idCliente : new FormControl(''),
    name: new FormControl(''),
    apellido: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private api:PersonaService,private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:clienteI){
   this.api.postCliente(form).subscribe(data=>{
     console.log(data);
   })

  }

}
