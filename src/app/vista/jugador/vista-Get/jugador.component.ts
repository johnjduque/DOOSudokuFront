import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador, Respuesta } from '../../../models/jugador';
import { JugadorService } from '../service/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  public jugadores:Jugador[]=[];

  constructor(private JugadoresService:JugadorService,private router:Router) { }

  ngOnInit(): void {
  }
public getJugadoresService(){
  this.JugadoresService.getJugadores().subscribe((res:Respuesta)=>{this.jugadores=res.datos;})
}

eliminarJugador(jugador:Jugador):void{
 this.JugadoresService.eliminarJugador(jugador.codigo).subscribe(
   res=>this.JugadoresService.getJugadores().subscribe(
     response=>this.jugadores=response.datos
     )
   );
  } 
}
