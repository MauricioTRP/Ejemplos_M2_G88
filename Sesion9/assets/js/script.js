/**
 * Selectores de elementos HTML
 * usando JS
 */

/**
 * getElementsByTagName()
 */

const titulos = document.getElementsByTagName("h1") // HTMLCollection(1)
const parrafos = document.getElementsByTagName("p") // HTMLCollection(2)

/**
 * notacion corchetes para acceder
 */
let parrafoRojo = parrafos[1] // p.rojo
console.log(parrafoRojo)

/**
 * getElementsByClassName
 */
const rojos = document.getElementsByClassName("rojo") // Coleción de elementos class="rojo"
console.log(rojos)

/**
 * getElementById
 */
const elementoId = document.getElementById("tituloPrincipal")
console.log("Elemento por identificador", elementoId)

/**
 * querySelector
 * querySelectorAll
 * 
 * usa selectores de tipo CSS
 */

// Selector de ID
let otroElementoId = document.querySelector("#tituloPrincipal")
console.log("Seleccionado con querySelector")
console.dir(otroElementoId)

otroElementoId.innerText = 'Título cambiado en JS'

// Seleccionar el primero de una clase
let primeroDeLaClase = document.querySelector(".rojo")

console.log("Clase con querySelector")
console.dir(primeroDeLaClase)

// Seleccionar todos los de la clase
let claseRojo = document.querySelectorAll(".rojo")
console.log("Todos los de la clase")
console.dir(claseRojo)

// Por etiqueta
let parrafosQuery = document.querySelectorAll("p")
console.log("Todos los de la etiqueta p")
console.dir(parrafosQuery)
