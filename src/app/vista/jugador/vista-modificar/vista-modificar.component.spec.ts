import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaModificarComponent } from './vista-modificar.component';

describe('VistaModificarComponent', () => {
  let component: VistaModificarComponent;
  let fixture: ComponentFixture<VistaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
