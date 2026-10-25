'use strict';

function convertirCaso(cadena) {
  return { mayusculas: cadena.toUpperCase(), minusculas: cadena.toLowerCase() };
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
  const r = convertirCaso(document.getElementById('cadena').value);
  mostrar('Mayúsculas: ' + r.mayusculas + '\nMinúsculas: ' + r.minusculas);
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(convertirCaso('Hola Mundo'));
}
