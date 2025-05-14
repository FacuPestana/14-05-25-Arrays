//1
//Creación de varibles
let colores = [' Blanco', ' Azul', ' Rojo', ' Verde', ' Naranja']
//                         0            1           2          3             4 
//consola
console.log(colores)

//2
console.log('Los colores son ' + colores)
//3
let cantidad = console.log('El largo es ' + colores.length) //Son en total 5 colores
//4
colores.unshift('Violeta') //se agrego un elemento Violeta y ahora son 6
console.log(colores)
console.log('El largo es ' + colores.length)


//6
colores.pop(4)  //Se elimina el 4to elemento
console.log('La cantidad de colores es actualmente de ' + colores.length + ' y son los siguientes: ' + colores) //Osea se elimino el color Naranja
//7
colores.shift() //Se elimina el primer elemento (Violeta)
console.log(colores)
//8
colores = colores.map(color => color.trim());

let index = colores.indexOf('Azul');
if (index !== -1) {
    colores[index] = 'Negro';
}
console.log(colores); // ['Blanco', 'Negro', 'Rojo', 'Verde']

//9
for (let i = 0; i < colores.length; i++) {
    console.log(`Color #${i + 1}: ${colores[i]}`); //Se lo pedi a ChatGPT porque me mataste profe, perdon. El resto te juero por mi vida que lo hice yo
}

/*10 
Desafío creativo:
Pedile al usuario con prompt() que ingrese 3 colores. Guardalos en un arreglo nuevo llamado nuevosColores y mostralos en consola.
*/

//Desafio 
let botonUsuario = document.getElementById('act10');

botonUsuario.onclick = function() {
    alert('Hola profe Ale')
    let colores = prompt('Ingresa 3 colores (separados por coma)');
    if (colores) {
        let nuevosColores = colores.split(',');
        console.log('Los colores que ingresaste fueron ' + nuevosColores);
    } else {
        console.log('No se ingresaron colores');
    }
    alert('Revisa la consola')
}
