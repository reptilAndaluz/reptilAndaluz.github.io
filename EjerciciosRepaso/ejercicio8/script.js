'use strict';

function azar(min, max) {
  const inferior = Math.ceil(Math.min(min, max));
  const superior = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (superior - inferior + 1)) + inferior;
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
  const min = Number(document.getElementById('min').value);
  const max = Number(document.getElementById('max').value);
  mostrar('azar(' + min + ', ' + max + ') → ' + azar(min, max));
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log('azar(-5, 10) →', azar(-5, 10));
}
