'use strict';

function leerNumeros(texto) {
  return texto.split(',').map((s) => s.trim()).filter((s) => s !== '').map(Number);
}
function sonValidos(lista) {
  return lista.length > 0 && lista.every(Number.isFinite);
}
function filtrarPares(lista) {
  return lista.filter((n) => n % 2 === 0);
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
  const lista = leerNumeros(document.getElementById('lista').value);
  if (!sonValidos(lista)) {
    mostrar('Error: introduce solo números separados por comas.');
    return;
  }
  mostrar('Pares: [' + filtrarPares(lista).join(', ') + ']');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8]));
}
