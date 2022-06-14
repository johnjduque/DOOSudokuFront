import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Respuesta, Jugador } from '../../../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(public http: HttpClient) { }
  
  private urlEndPoint = "http://localhost:8080/api/v1/jugador";
  
  getJugadores(){
    return this.http.get<Respuesta>(this.urlEndPoint).pipe(map(resp=>resp));
  }
  crearJugador(jugador : Jugador) : Observable<any>{
    return this.http.post(this.urlEndPoint, jugador).pipe(
      map((response: any) => response as any))
  }
  modificarJugador(jugador: Jugador): Observable<any> {
    return this.http.put(`${this.urlEndPoint}/${jugador.codigo}`, jugador).pipe(
      map((response: any) => response as any))
  }
  eliminarJugador(codigo :number ){
    return this.http.delete<Respuesta>(`${this.urlEndPoint}/${codigo}`).pipe(map(resp=>resp));
  }
  getJugadorCodigo(codigo:number){
    return this.http.get<Respuesta>(`${this.urlEndPoint}/${codigo}`).pipe(map(resp=>resp));
  }
}
