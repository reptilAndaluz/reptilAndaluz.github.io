'use strict';

function leerNumeros(texto) {
  return texto.split(',').map((s) => s.trim()).filter((s) => s !== '').map(Number);
}
function sonValidos(lista) {
  return lista.length > 0 && lista.every(Number.isFinite);
}
function promedio(lista) {
  if (lista.length === 0) {
    return NaN; // evita dividir entre 0
  }
  return lista.reduce((acumulado, n) => acumulado + n, 0) / lista.length;
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
  mostrar('Promedio de [' + lista.join(', ') + '] = ' + promedio(lista));
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(promedio([5, 7, 9, 10]));
}
