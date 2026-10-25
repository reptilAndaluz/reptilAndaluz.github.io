'use strict';

function leerNumeros(texto) {
  return texto.split(',').map((s) => s.trim()).filter((s) => s !== '').map(Number);
}
function sonValidos(lista) {
  return lista.length > 0 && lista.every(Number.isFinite);
}
function ordenar(lista) {
  // [...lista] copia el array para no mutar el original; sin comparador, sort() ordenaría como texto
  return [...lista].sort((a, b) => a - b);
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
  mostrar('Original: [' + lista.join(', ') + ']\nOrdenado: [' + ordenar(lista).join(', ') + ']');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(ordenar([10, 2, 33, 4, -1, 7]));
}
