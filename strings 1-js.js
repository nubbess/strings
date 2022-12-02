// strings / cadenas de caracteres
let strSgl = 'hola soy un texto';
console.log(strSgl);

let strDbl = "hola soy un texto con comillas dobles";
console.log(strDbl);

/* mantener siempre el mismo tipo de notación (a lo largo del proyecto
usar las mismaas comillas)*/

// para incluir comillas dentro de un str, backslash \ (alt + 92)

let strBS = "el otro dia me dijo \"la puta que lo pario\""

console.log(strBS)

// idem con comillas simples

let strBSSgl = 'el otro dia me dijo \'saca la basura\''
console.log(strBSSgl)

// también, se puede hacer mix entre comillas sin necesidad de utilizar backslash

/*lo mismo las backticks `` pero estas tienen un plus. Se puede incluir un let const o var (permite
    saltos de linea)*/

let name = "Julian"
let saludo = `Hola, me llamo ${name}`
console.log(saludo)

// para plantillas html

let plantilla = `
<html>
    <h1>
    Mi página web, soy ${name}
    </h1>
    <p>
    mi párrafo
    </p>
</html>
`;
console.log(plantilla);

let lista = ["El Aleph", "El Túnel", "Historia Universal de la Infamia"];
