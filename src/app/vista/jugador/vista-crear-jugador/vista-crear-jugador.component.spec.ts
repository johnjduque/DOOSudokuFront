import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCrearJugadorComponent } from './vista-crear-jugador.component';

describe('VistaCrearJugadorComponent', () => {
  let component: VistaCrearJugadorComponent;
  let fixture: ComponentFixture<VistaCrearJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCrearJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCrearJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
