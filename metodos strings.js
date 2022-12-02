// métodos mas usados con cadenas de caracteres [strings]

// cómo obtener la longitud de un string

let str = 'hola soy un string';

console.log(str.length);

// obtener partes de cadenas de caracteres: slice(x, y), substring() y substr()
// slice
let sliceStr = str.slice(3, 7);
console.log(sliceStr);
// substring
let substringStr = str.substring(5, 10);
console.log(substringStr);
// substr
let substrStr = str.substr(5 /*desde donde*/, 10 /*cuantos caracteres*/);
console.log(substrStr)

// reemplazar contenido de un str

let cadena = "hola mi nombre es Julian";
console.log(cadena.replace("Julian", "Paula"))


let strLargo = `Tito no es un mono cualquiera. A Tito no le gusta
trepar por los árboles y odia comer plátanos. Él
prefiere pasear por el bosque, oler las flores y
recoger las nueces que se caen de los árboles.`;

console.log(strLargo.replace("los", "cinco"));

/* por defecto el metodo replace actua en el primer "los". Para cambiar todos los los, deberiamos usar
expresiones regulares*/

// al utillizar /X/g (global) reemplaza todas las instancias

console.log(strLargo.replace(/los/g, "cinco"));
