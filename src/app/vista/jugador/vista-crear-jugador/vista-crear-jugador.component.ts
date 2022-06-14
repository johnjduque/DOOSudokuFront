import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../../models/jugador';
import { JugadorService } from '../service/jugador.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-vista-crear-jugador',
  templateUrl: './vista-crear-jugador.component.html',
  styleUrls: ['./vista-crear-jugador.component.css']
})
export class VistaCrearJugadorComponent implements OnInit {
jugadorNuevo:Jugador = new Jugador;
 
constructor(private JugadoresService:JugadorService, private router : Router) { }

  ngOnInit(): void {
  }

createJugador() {
  this.JugadoresService.crearJugador(this.jugadorNuevo).subscribe((result) => {
  if(result != null){
    console.log(result.mensajes[0])
    this.router.navigate(["/vista-getJugador"]);
    }
  });
}
}
