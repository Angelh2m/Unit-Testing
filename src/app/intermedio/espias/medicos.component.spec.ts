import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {

      componente = new MedicosComponent(servicio);

    });

    // Fake call to an API

    it('Init debe de cargar los medicos', () => {

      const medicos = ['Medico1', 'Medico2', 'Medico3'];

      spyOn( servicio, 'getMedicos').and.callFake( () => {

        return Observable.from( [medicos] );

      });

      componente.ngOnInit();

      expect( componente.medicos.length).toBeGreaterThan(0);

    });



    it('Debe de llamar al servidor para gregar un medico', () => {


      const espia = spyOn( servicio, 'agregarMedico').and.callFake( medico => {
        // Empty === Completed!
        return Observable.empty();
      });

      componente.agregarMedico();

      expect( espia ).toHaveBeenCalled();

    });



    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

      const medico = { id: 1, nombre: 'Juan'};

      spyOn( servicio, 'agregarMedico' ).and.returnValue(  Observable.from( [medico] ) );

      componente.agregarMedico();

      expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

    });


    it('Si falla la adicion, la propiedad mensajeError', () => {

      const miError = 'No se puedo agregar el correo';

      spyOn( servicio, 'agregarMedico').and
        .returnValue(Observable.throw( miError ) );

      componente.agregarMedico();

      expect( componente.mensajeError).toBe( miError );

    });


    // it('Debe de llamar al servidor para borrar un medico', () => {

    //   const espia = spyOn(servicio, 'borrarMedico')
    //     .and.returnValue(Observable.empty);

    //   componente.borrarMedico('1');

    //   expect( espia ).toHaveBeenCalledWith('1');

    // });


});
