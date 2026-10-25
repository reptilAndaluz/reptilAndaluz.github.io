'use strict';

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
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
  const c = Number(document.getElementById('celsius').value);
  mostrar(c + ' °C = ' + celsiusAFahrenheit(c).toFixed(2) + ' °F');
}

if (typeof document !== 'undefined') {
  document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    ejecutar();
  });
} else {
  // Modo Node.js: node script.js
  console.log(celsiusAFahrenheit(25));
}
