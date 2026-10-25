'use strict';

function generar(cantidad, max) {
  return Array.from({ length: cantidad }, () => Math.floor(Math.random() * max) + 1);
}
function frecuencias(lista) {
  const cuenta = new Map();
  lista.forEach((n) => cuenta.set(n, (cuenta.get(n) || 0) + 1));
  return cuenta;
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
  const numeros = generar(100, 20);
  const cuenta = frecuencias(numeros);
  const detalle = [...cuenta.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([n, veces]) => n + ': ' + veces + ' vez/veces')
    .join('\n');
  mostrar('Números distintos que han aparecido: ' + cuenta.size + ' de 20\n\n' + detalle);
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
  ejecutar();
} else {
  // Modo Node.js: node script.js
  ejecutar();
}
