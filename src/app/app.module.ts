import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JugadorComponent } from './vista/jugador/vista-Get/jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SudokuComponent } from './vista/sudoku/sudoku.component';
import { APP_ROUTING } from "./app-routing.module";
import { VistaCrearJugadorComponent } from './vista/jugador/vista-crear-jugador/vista-crear-jugador.component';
import { VistaModificarComponent } from './vista/jugador/vista-modificar/vista-modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    SudokuComponent,
    VistaCrearJugadorComponent,
    VistaModificarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
