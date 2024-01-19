/*ANTES DE NADA, COPIATE ESTE CÓDIGO EN TU VSCODE, Y CADA VEZ QUE QUIERAS PROBAR QUE FUNCIONE HAZ LO SIGUIENTE:
    0 - Abre el editor
    1 - Crear un archivo que se llame por ejemplo: "practica.js"
    2 - Vete a la parte superior izquierda a donde ponga View
    3 - Clicas y te saldra una lista de opciones, elije la opción "Terminal"
    4 - Se te abrirá abajo la terminal
    5 - Cada vez que quieras ejecutar el código escribe en la terminal los siguientes comandos: 
        "node <nombre de tu archivo>" 
        Quedaría algo tal que así, en este caso:
        
        "node practica.js"

SI TIENES ALGUNA DUDA O PROBLEMA PARA EJECUTAR EL CÓDIGO O ENTENDER MI EXPLICACIÓN HAZLO SABER POR DISCORD O WHAT'S APP, estamos todos para ayudarnos
Buena suerte entendiendo los objetos dinámicos, espero que este código te haya servido de algo
*/


/* Hablamos de objetos dinámicos cuando nos referimos a un objeto que puede variar en sus atributos.
la forma que tenemos de crear uno, es haciendo uso de variables de la siguiente forma: */

// Hemos declarado unas varibales con ciertos valores.

var soyUnaKey1 = "nombre"
var soyUnaKey2 = "edad"
var soyUnaKey3 = "email"

var soyUnValor1 = "Alberto"
var soyUnValor2 = "20"
var soyUnValor3 = "alberto@gmail.com"


const dynamicObject = {
/*KEY*/[soyUnaKey1]: [soyUnValor1]/*VALUE*/,
    [soyUnaKey2]: [soyUnValor2],
    [soyUnaKey3]: [soyUnValor3],
}

/* Hemos creado un objeto donde sus KEYS* y sus VALUES* serán determinados por los valores de las varibales anteriores, las cuales
especificamos en el objeto. Hemos usado "[]" y dentro hemos escrito el nombre de la varibale de donde queremos que saque
el nombre de su key o su value.

Si hacemos un console.log(), nos saldrá el objeto creado: */

console.log(dynamicObject)

/* Para que nos sirve esto? podrás preguntarte, pues esto es lo primero que se me courre a mi: */


// He creado una función, que recive 6 parametros, y crea un objeto donde sus KEYS y VALUES, definidas por estos parametros:
function crearObjeto(key1, key2, key3, value1, value2, value3) {
    const objeto = {
        [key1]: [value1],
        [key2]: [value2],
        [key3]: [value3],
    }

    return objeto
}

// La función retorna este objeto, osea lo devuelve

// Si yo incovo esta función puedo pasarle el nombre de las keys que yo quiero que tenga y los valores de dichas keys que yo quiera: 

miObjeto = crearObjeto("nombre", "edad", "estoyVivo", "Alberto", 20, true)

// he guardado mi objeto en una variable, vamos a imprimirla a ver que tal.
console.log(miObjeto)