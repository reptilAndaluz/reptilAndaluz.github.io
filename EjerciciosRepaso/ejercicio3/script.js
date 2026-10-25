'use strict';

const persona = {
  nombre: 'Lucía',
  apellidos: 'Pérez Gómez',
  edad: 28,
  altura: 1.65,
  casada: false,
  mascota: null,
  segundoNombre: undefined,
  idiomas: ['español', 'inglés'],
  direccion: { calle: 'Calle Mayor 1', ciudad: 'Granada', cp: '18001' },
  presentarse() {
    return 'Hola, soy ' + this.nombre + ' ' + this.apellidos;
  },
};

const salida = typeof document !== 'undefined' ? document.getElementById('resultado') : null;

function mostrar(texto) {
  if (salida) {
    salida.textContent = texto; // textContent evita inyección de HTML (XSS)
  } else {
    console.log(texto);
  }
}

function ejecutar() {
  console.log(persona);
  console.table(persona);
  console.table(persona.direccion);
  mostrar(JSON.stringify(persona, null, 2) + '\n\n' + persona.presentarse());
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
  ejecutar();
} else {
  // Modo Node.js: node script.js
  ejecutar();
}
