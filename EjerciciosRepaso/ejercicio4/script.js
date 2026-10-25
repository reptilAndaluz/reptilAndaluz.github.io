'use strict';

function sumar(a, b) {
  return a + b;
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
  const a = Number(prompt('Primer número:'));
  const b = Number(prompt('Segundo número:'));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    mostrar('Error: debes introducir números válidos.');
    console.error('Entrada no numérica');
    return;
  }
  const resultado = a + ' + ' + b + ' = ' + sumar(a, b);
  console.log(resultado);
  mostrar(resultado);
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(sumar(Number('3'), Number('4')));
}
