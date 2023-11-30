/* Una funcion es una estructura que nos permite organizar mejor nuestro codigo,
para reciclar codigo, y volverlo a utilizar cuantas veces querramos.

function name(params) {
    
} 

*/

function dobleNumero(x) {
    return 2 * x;
}

// hacemos el llamado de la function
// tomamos como argumento el numero 5
// lo guardamos en una variable llamada resultado

let resultado = dobleNumero(5);

// para que el usuario introduzca el argumento:

let n = parseFloat(prompt("Introduzca un número"));

resultado = dobleNumero(n);