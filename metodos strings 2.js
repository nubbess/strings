// metodos cadenas de texto parte 2

// toLowerCase - toUpperCase (pasa todo a minuscula o a mayuscula)


let input = "acuario"
let db= "Acuario"

console.log(input.toLowerCase === db.toLowerCase)

// toLocaleUpperCase - toLocaleLowerCase (para otros idiomas)

// formas de concatenar dos str

let str1 = "hola soy la primer cadena";
let str2 = "y yo soy la segunda cadena";
console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);

// CUIDADO con el +. Para números los suma por mas que sean de tipo String. es mejor práctica el concat.

// también se pueden usar backticks

console.log(`${str1} ${str2}`) //tiene un espacio entre las dos str que lo leen las comillas

let str3 = "        soy un str con espacios al inicio y al final.         ";

console.log(str3.length)
// trim()
console.log(str3.trim().length)
// y puede quitar espacios al inicio y al final
console.log(str3.trimEnd().length)
console.log(str3.trimStart().length)


// obtener el caracter que hay en cierta posición

let str4 = "hola soy el str 4";
console.log(str4.charAt(3))
console.log(str4[3])

// obtener posicion de palabra dentro de str

let str5 = "haskld asjlkdasljdk alsjdkalsj laksdjlka julian"
console.log(str5.indexOf("julian"))
// si no encuentra el caracter devuelve -1
