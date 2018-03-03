import { mensaje } from './string';



describe(' Pruebas de string', () => {

  it('Debe de regeresar un string', () => {

    const resp = mensaje('Fernando');
    expect(typeof resp).toBe('string');

  });

  it('Debe de regeresar con el nombre enviado', () => {

    const resp = mensaje('Fernando');
    expect(resp).toContain('Saludos');

  });

});
