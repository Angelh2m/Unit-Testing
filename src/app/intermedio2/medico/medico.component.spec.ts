
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';



describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;


  beforeEach( () => {

    // Crear la configuracion del componente
    TestBed.configureTestingModule({

      declarations: [MedicoComponent],

    });

    // Crear componente
    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;

  });


  it('Debe de crearse el componente', () => {
    expect( component ).toBeTruthy();
  });

});
