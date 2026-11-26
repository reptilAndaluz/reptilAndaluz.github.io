'use strict'

let html = "<html><body><h1 class=\"h1 font text\">Formación técnica</h1></body></html>"

let expression = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);
let result = expression.exec(html);

console.log(result.groups.texto);

let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})\s?/);

let isValid = phone.exec("+34 600 123 456");

console.log(isValid !== null);