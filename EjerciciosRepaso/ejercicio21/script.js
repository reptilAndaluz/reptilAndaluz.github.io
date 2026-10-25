'use strict';

function leerNumeros(texto) {
  return texto.split(',').map((s) => s.trim()).filter((s) => s !== '').map(Number);
}
function sonValidos(lista) {
  return lista.length > 0 && lista.every(Number.isFinite);
}
function mayoresQue(lista, valor) {
  return lista.filter((n) => n > valor);
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
  const valor = Number(document.getElementById('valor').value);
  if (!sonValidos(lista) || Number.isNaN(valor)) {
    mostrar('Error: revisa los datos introducidos.');
    return;
  }
  mostrar('Mayores que ' + valor + ': [' + mayoresQue(lista, valor).join(', ') + ']');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(mayoresQue([3, 8, 15, 22, 5, 40], 10));
}
