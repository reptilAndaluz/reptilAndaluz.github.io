//Ejercicio 1

//Devuelve el tipo de variable
const getType = (value) => {
    if (value == null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

//Declaracion de las variables

const nombre = "Vaca";                      // string
const edad = 20;                            // int
const esActivo = true;                      // boolean
let sinValor;                               // Sin definir
const vacio = null;                         // null
const idUnico = Symbol("id");               // symbol
const enteroGrande = 9007199254740993n;     // bigint
const colores = ["rojo", "verde"];          // array
const usuario= {nombre, edad}               // object

//console.log: salida general

console.log("Nombre:", nombre, "| Tipo:", getType(nombre));
console.log("edad:", edad, "| Tipo:", getType(edad));

//console.log: salida de información
console.info("Activo:", esActivo, "| Tipo:", getType(esActivo));
console.info("BigInt:", enteroGrande, "| Tipo:", getType(enteroGrande));

// console.debug: depuración
console.debug("Array:", colores, "| Tipo:", getType(colores));
console.debug("Objeto:", usuario, "| Tipo:", getType(usuario));
console.debug("Symbol:", idUnico.toString(), "| Tipo:", getType(idUnico));

// console.error: errores / valores problemáticos
console.error("Undefined:", sinValor, "| Tipo:", getType(sinValor));
console.error("Null:", vacio, "| Tipo:", getType(vacio));


// Ejercicio 2
const TOTAL = 100;
const MIN = 1;
const MAX = 100;

const numeros = Array.from({ length: TOTAL }, () =>
    Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
);

console.table(numeros);

const enRango = numeros.filter((n) => n >= 20 && n <= 50);
console.log("Valores entre 20 y 50:");
console.table(enRango);