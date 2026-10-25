'use strict';

const TAMANO = 100;
function generarArray() {
  return Array.from({ length: TAMANO }, () => Math.floor(Math.random() * 101));
}
function filtrarRango(lista, min, max) {
  return lista.filter((n) => n >= min && n <= max);
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
  const datos = generarArray();
  console.table(datos);
  const min = Number(document.getElementById('min').value);
  const max = Number(document.getElementById('max').value);
  const filtrados = filtrarRango(datos, min, max);
  mostrar('Array (' + datos.length + ' valores):\n' + datos.join(', ') +
    '\n\nValores entre ' + min + ' y ' + max + ' (' + filtrados.length + '):\n' + filtrados.join(', '));
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
  ejecutar();
} else {
  // Modo Node.js: node script.js
  const datos = generarArray();
  console.table(datos);
  console.log(filtrarRango(datos, 20, 60));
}
