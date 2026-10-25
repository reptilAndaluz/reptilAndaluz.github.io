'use strict';

function esPar(numero) {
  return numero % 2 === 0;
}

const salida = typeof document !== 'undefined' ? document.getElementById('resultado') : null;

function mostrar(texto) {
  if (salida) {
    salida.textContent = texto; // textContent evita inyección de HTML (XSS)
  } else {
    console.log(texto);
  }
}

function ejecutar() {
  const numero = Number(prompt('Introduce un número entero:'));
  if (!Number.isInteger(numero)) {
    mostrar('Error: debes introducir un número entero.');
    return;
  }
  mostrar('El ' + numero + ' es ' + (esPar(numero) ? 'par' : 'impar'));
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  [7, 10].forEach((n) => console.log(n + ' es ' + (esPar(n) ? 'par' : 'impar')));
}
