'use strict';


const salida = typeof document !== 'undefined' ? document.getElementById('resultado') : null;

function mostrar(texto) {
  if (salida) {
    salida.textContent = texto; // textContent evita inyección de HTML (XSS)
  } else {
    console.log(texto);
  }
}

function ejecutar() {
  const variables = {
    nombre: 'Ana',
    edad: 25,
    altura: 1.68,
    esEstudiante: true,
    direccion: null,
    telefono: undefined,
    identificador: Symbol('id'),
    grande: 12345678901234567890n,
    aficiones: ['leer', 'correr'],
    perfil: { ciudad: 'Granada' },
    saludar: function () { return 'Hola'; },
  };
  const lineas = [];
  for (const [nombre, valor] of Object.entries(variables)) {
    const tipo = valor === null ? 'null (typeof: object)' : typeof valor;
    const texto = nombre + ' = ' + String(valor) + ' → ' + tipo;
    lineas.push(texto);
    if (tipo === 'undefined') {
      console.error(texto);
    } else if (tipo.startsWith('null')) {
      console.info(texto);
    } else if (tipo === 'object' || tipo === 'function') {
      console.debug(texto);
    } else {
      console.log(texto);
    }
  }
  mostrar(lineas.join('\n'));
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
