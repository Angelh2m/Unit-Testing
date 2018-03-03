import { Jugador } from './clase';


describe('Pruebas de Clase', () => {

  const jugador = new Jugador();

  // -> Ciclos de vida de las prubeas

  // -> Se dispara antes que todas
  // beforeAll();
  // -> Antes de cada una de las puebas
  // beforeEach();

  // -> Despues de todas
  // afterAll();
   // -> Despues de cada una
  // afterEach();


  it('Debe de retornar 80 de HP', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);

  });

  it('Debe de retornar 60 de HP', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(60);

  });

});
