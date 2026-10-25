'use strict';

function esPalindromo(texto) {
  const limpio = texto
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  return limpio === limpio.split('').reverse().join('');
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
  const texto = document.getElementById('palabra').value;
  mostrar('"' + texto + '" ' + (esPalindromo(texto) ? 'SÍ' : 'NO') + ' es un palíndromo');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(esPalindromo('Anita lava la tina'), esPalindromo('hola'));
}
