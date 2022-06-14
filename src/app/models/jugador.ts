export class Jugador {
     codigo: number = 0;
	 nombre: string ="";
	 documentoIdentificacion:number =0;
	 correo:string="";
	 clave:string="";
}
export interface Respuesta{
    estado:string;
    mensajes:string[]
    datos:Jugador[]

}
