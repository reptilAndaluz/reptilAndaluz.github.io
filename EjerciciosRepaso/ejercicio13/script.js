'use strict';

function contarPalabras(frase) {
  // split(/\s+/) tolera varios espacios; filter elimina cadenas vacías
  return frase.trim().split(/\s+/).filter((p) => p !== '').length;
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
  const frase = document.getElementById('frase').value;
  mostrar('La frase tiene ' + contarPalabras(frase) + ' palabras');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(contarPalabras('Me gusta programar en JavaScript'));
}
