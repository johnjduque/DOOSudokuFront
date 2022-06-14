import { Routes, RouterModule } from '@angular/router';
import { JugadorComponent } from './vista/jugador/vista-Get/jugador.component';
import { SudokuComponent } from './vista/sudoku/sudoku.component';
import { VistaCrearJugadorComponent } from './vista/jugador/vista-crear-jugador/vista-crear-jugador.component';
import { VistaModificarComponent } from './vista/jugador/vista-modificar/vista-modificar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vista-sudoku',
    pathMatch: 'full'
  },
  {
    path: 'vista-getJugador',
    component: JugadorComponent
  },
  {
    path: 'vista-sudoku',
    component: SudokuComponent
  },
  {
    path: 'vista-crearJugador',
    component: VistaCrearJugadorComponent
  },
  {
    path: 'vista-modificar/:codigo',
    component: VistaModificarComponent
  }
];

export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
