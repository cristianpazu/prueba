import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingCompomets } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonaService} from './servicio/persona.service';
import {HttpClientModule} from '@angular/common/http'
import { PersonaComponent } from './persona/persona.component';
import {ReactiveFormsModule, FormsModule} from  '@angular/forms';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
//import { NuevoComponent } from './vistas/nuevo/nuevo.component';
//import { EditarComponent } from './vistas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    HeaderComponent,
    FooterComponent,
    routingCompomets
   // NuevoComponent,
    //EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
