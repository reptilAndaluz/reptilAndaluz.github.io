'use strict';

function contarVocales(palabra) {
  const vocales = 'aeiou';
  // normalize + regex: quita tildes para que "é" cuente como "e"
  const limpia = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let total = 0;
  for (let i = 0; i < limpia.length; i++) {
    if (vocales.includes(limpia[i])) {
      total++;
    }
  }
  return total;
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
  const palabra = document.getElementById('palabra').value.trim();
  mostrar('"' + palabra + '" tiene ' + contarVocales(palabra) + ' vocales');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(contarVocales('murciélago'));
}
