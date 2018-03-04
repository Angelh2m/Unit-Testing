import { Jugador2 } from './jugador2';


describe('Jugador 2 emit', () => {

  let jugador: Jugador2;

  // Ejecutara antes que todas las pruebas
  // Iniciar la clase
  beforeEach(() => jugador = new Jugador2());

  it('Debe de emitir un evento cuando recibe daño y sobrebibir', () => {

    let nuevoHp = 0;

    // Recibir el cambio de datos
    jugador.hpCambia.subscribe(hp => nuevoHp = hp );

    // Emitir el resultado
    jugador.recibeDanio(1000);

    // Probar la logica
    expect(nuevoHp).toBe(0);

  });

  it('Debe de emitir un evento cuando recibe daño y sobrebibir', () => {

    let nuevoHp = 0;

    // Recibir el cambio de datos
    jugador.hpCambia.subscribe(hp => nuevoHp = hp );

    // Emitir el resultado
    jugador.recibeDanio(50);

    // Probar la logica
    expect(nuevoHp).toBe(50);

  });

});
