/*
En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.
*/

let producto = prompt("Ingrese producto")

switch (producto) {
    case "lentejas":
        console.log("No paga IVA");
        break;
    case "arroz":
        console.log("No paga IVA");
        break;
    case "crema":
        console.log("Paga IVA");
        break;
    case "vino":
        console.log("Paga IVA");
        break;
    default:
        console.log("Ingrese un producto válido");
        break;
}
