'use strict';

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) { // basta llegar a la raíz cuadrada
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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
  const limite = Number(document.getElementById('limite').value);
  if (!Number.isInteger(limite) || limite < 2 || limite > 100000) {
    mostrar('Error: introduce un entero entre 2 y 100000.');
    return;
  }
  const primos = [];
  for (let n = 1; n <= limite; n++) {
    if (esPrimo(n)) {
      primos.push(n);
    }
  }
  mostrar('Primos entre 1 y ' + limite + ' (' + primos.length + '):\n' + primos.join(', '));
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  const primos = [];
  for (let n = 1; n <= 50; n++) { if (esPrimo(n)) primos.push(n); }
  console.log(primos.join(', '));
}
