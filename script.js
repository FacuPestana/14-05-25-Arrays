
//1
//Creación de varibles
let colores = ['Blanco', 'Azul', 'Rojo', 'Verde', 'Naranja']
//                0        1       2        3         4 
//consola
console.log(colores) //5 colores

//2
console.log(colores[0]) //Blanco porque 1 - 1 = 0
//3
console.log(colores[4])
//4
console.log(colores.length)
//5
colores.push('Violeta') //se agrego un elemento Violeta y ahora son 5
console.log(colores)

//6
colores.shift(4)  //Se elimina el 4 osea Naranja
console.log(colores)