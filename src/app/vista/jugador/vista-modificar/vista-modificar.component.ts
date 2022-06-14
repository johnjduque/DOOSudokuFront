import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador, Respuesta } from '../../../models/jugador';
import { JugadorService } from '../service/jugador.service';

@Component({
  selector: 'app-vista-modificar',
  templateUrl: './vista-modificar.component.html',
  styleUrls: ['./vista-modificar.component.css']
})
export class VistaModificarComponent implements OnInit {
  jugadorNuevo:Jugador = new Jugador;

  constructor(private JugadorService:JugadorService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let codigo=e['codigo'];
        if(codigo){
          this.JugadorService.getJugadorCodigo(codigo).subscribe(
            (res:Respuesta)=>{this.jugadorNuevo=res.datos[0]}
          );
        }
      }
    )
  }

  modificarJugador() {
    this.JugadorService.modificarJugador(this.jugadorNuevo).subscribe((result) => {
    if(result != null){
      console.log(result.mensajes[0])
      this.router.navigate(["/vista-getJugador"]);
      }
    });
  }
}
