document.write('Nueva línea de texto')

/**
 * Arreglos
 * 
 * representa "muchas cosas" de una familia
 * 
 * 1- Ordenada
 * 2- "espacio" "indice"
 */
const estudiantes = ['Luis Urzua', 'Leonardo Lobo', 'María Riquelme', 'Dayanna']
let libros = ['Eloquent JS', 'Matemáticas Apostol', '40 leguas de viaje submarino', 'Contemplando la luna']

estudiantes[1] // -> 'Leonardo Lobo'


/**
 * Objeto
 * 
 * representa "una cosa"
 */

const auto =  { 
  marca: 'Toyota',
  fabricacion: '2005',
  color: 'Azul',
  puertas: '5',
  modelo: 'Spark',
  encendido: false,
  odometro: 200000,
  encender: function () {
    return "🚗💨💨💨💨"
  }
}

// lectura
auto.color // -> 'Azul'
auto.encender() // -> "🚗💨💨💨💨"

// escritura propiedades
auto.color = 'Rojo' // Ahora el auto será rojo



/**
 * Funciones
 * 
 * Agrupan instrucciones dentro de un bloque
 */
function saludar(nombre) {
  return "Hola " + nombre
}

/**
 * Arreglos y objetos se pueden "agrupar" o usar de forma conjunta
 * 
 * Caso 1, un autor y sus publicaciones
 */

const autor = {
  nombre: 'Haruki',
  nacionalidad: 'Japon',
  edad: '65',
  sexo: 'Varon',
  obras: ['Libro1', 'Libro2', 'Libro3', 'Libro4']
}

/**
 * podemos agregar nuevas propiedades
 */
autor.genero = 'Novela'

/**
 * podemos eliminar propiedades
 */
delete autor.nacionalidad



/**
 * Caso 2, lista de productos
 */
let listaProductos = [
  { codigo: 123, nombre: 'Martillo', precio: 3500 },
  { codigo: 546, nombre: 'Serrucho', precio: 30000},
  { codigo: 674, nombre: 'Alicate', precio: 10990 },
  { codigo: 534, nombre: 'Pala', precio: 45000},
  { codigo: 789, nombre: 'Destornillador', precio: 1500 },
  { codigo: 321, nombre: 'Taladro Eléctrico', precio: 45000 },
  { codigo: 654, nombre: 'Alicate', precio: 2500 },
  { codigo: 987, nombre: 'Llave Inglesa', precio: 5200 },
  { codigo: 432, nombre: 'Cinta Métrica', precio: 1200 },
  { codigo: 876, nombre: 'Nivel de Burbuja', precio: 2800 },
  { codigo: 135, nombre: 'Cúter', precio: 900 },
  { codigo: 246, nombre: 'Guantes de Seguridad', precio: 1800 },
  { codigo: 369, nombre: 'Caja de Herramientas', precio: 8500 },
  { codigo: 258, nombre: 'Clavos', precio: 400 },
  { codigo: 624, nombre: 'Juego de Brocas', precio: 5000 },
  { codigo: 738, nombre: 'Soplete', precio: 42000 },
  { codigo: 849, nombre: 'Llave Stilson', precio: 3500 },
  { codigo: 951, nombre: 'Soldador Eléctrico', precio: 25000 },
  { codigo: 162, nombre: 'Destornillador de Impacto', precio: 2000 },
  { codigo: 273, nombre: 'Tijeras de Electricista', precio: 1800 },
  { codigo: 384, nombre: 'Cerradura de Seguridad', precio: 15000 },
  { codigo: 495, nombre: 'Mascarilla de Protección', precio: 800 },
  { codigo: 516, nombre: 'Escofina', precio: 2700 },
  { codigo: 627, nombre: 'Linterna LED', precio: 3200 },
]


/**
 * Ciclo While
 * 
 * hacer tareas repetitivas mientras se cumpla una condición
 * 
 * "Mientras existan productos"
 * "Mientras el usuario esté de acuerdo"
 * "Mientras no cambie una condición"
 */

/**
 * Caso 1
 * 
 * ciclo while basico
 */

/**
 * console.log -> mostrar mensajes en la consola
 */
let numero = 5

while (numero > 0) {
  console.log(`Despegue en ` + numero)
  document.write(`<br>Despegue en ` + numero)
  numero = numero - 1 // actualización de la condición
}

/**
 * Caso 2
 * 
 * queremos recorrer un arreglo (Arreglo libros)
 * ['libro1', 'libro2', 'libro3'] -> length = 3
 *    idx        idx       idx
 *     0          1         2
 */

console.log("Comienzo ciclo sobre libros")
let idx = 0
while (idx < libros.length) {
  console.log("Nombre del libro " + libros[idx])

  idx = idx + 1 // actualiza la condición de detención
}

/**
 * Caso 3
 * 
 * recorrer un arreglo con objetos
 * 
 * nombre herramienta y precio
 * listaProductos[7].precio
 */

let idx2 = 0
while(idx2 < listaProductos.length) {
  console.log(listaProductos[idx2].nombre + " precio: " + listaProductos[idx2].precio)

  idx2 = idx2+1 // actualizo condición
}
