'use strict';

function palabraMasLarga(frase) {
  const palabras = frase.trim().split(/\s+/).filter((p) => p !== '');
  let masLarga = '';
  for (const palabra of palabras) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }
  return masLarga;
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
  const palabra = palabraMasLarga(document.getElementById('frase').value);
  mostrar(palabra === '' ? 'Escribe una frase.' : 'Palabra más larga: "' + palabra + '" (' + palabra.length + ' letras)');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(palabraMasLarga('Aprender JavaScript es divertidísimo'));
}
