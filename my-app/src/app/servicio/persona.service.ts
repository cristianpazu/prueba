import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { listaclienteI } from '../../app/model/listacliente.interface';
import {from, Observable} from 'rxjs';
import {clienteI} from '../../app/model/paciente.interface';
import { ResponseI } from './response.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url: String='http://localhost:8080/';
  constructor(private httpClient:HttpClient) { }
  getAllCliente():Observable<listaclienteI[]>{
    let direccion = this.url+'clientes';
   
    return this.httpClient.get<listaclienteI[]>(direccion);
  }

  getSingleCliente(id): Observable<clienteI>{
    let direccion = this.url +'clientes/' + id;
    return this.httpClient.get<clienteI>(direccion);
  }

  putCliente(form:clienteI):Observable<clienteI>{
    let direccion = this.url + 'clientes';
    
    return this.httpClient.put<clienteI>(direccion, form);
  }

 deleteClient(form:clienteI):Observable<clienteI>{
    let direccion = this.url + 'clientes';
    let Option={
      headers: new HttpHeaders({
        'Conten-type':'application/json'
      }),
      body:form

    }
    return this.httpClient.delete<clienteI>(direccion,Option);
  }

  postCliente(form:clienteI):Observable<ResponseI>{
    let direccion = this.url + "clientes";
  
    return this.httpClient.post<ResponseI>(direccion, form);

  }
  
}

