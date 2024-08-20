/**
 * TIPOS DE DATOS BÁSICOS
 * 
 * Number -> numero
 * String -> texto
 * Boolean -> Verdad o mentira (verdadero falso)
 * Null -> nulo o vacío
 * Undefined -> no definidos
 */

/**
 * HERRAMIENTAS DEL NAVEGADOR
 * confirm -> pide confirmación a usuario retorna booleano
 * prompt -> pide información al usuario y retorna string
 * alert -> informar al usuario
 */

/**
 * DECLARACIÓN DE VARIABLES
 * 
 * var nombreVariable = algo
 * let nombreVariable = otraCosa
 * const MI_CONSTANTE = unaConstante
 */

/**
 * OPERADORES DE COMPARACIÓN
 * 
 * != distinto
 * == iguall
 * <= menor o igual
 * >= mayor o igual
 * < menor estricto
 * > mayor estricto
 */

/**
 * OPERADORES LÓGICOS
 * 
 * & -> y lógico. 
 * | -> o lógico
 */

// confirm('¿Estás de acuerdo con las políticas de privacidad?')

// var nombre = 'Juan'
// let edad = 45
// const fechaNacimiento = 1985

let nombre = prompt('Ingrese su nombre')
let apellido = prompt('Ingrese su apellido')
let fechaNacimiento = Number(prompt('Ingrese su año de nacimiento'))

// Analizamos si año de nacimiento es menor a 1900 (fechaNacimiento <= 1900)
// mayor a 2024 (fechaNacimiento > 2024)

if(fechaNacimiento <= 1900 || fechaNacimiento > 2024) {
  // Caso de error
  alert('Ingresa años mayores a 1900 o  menores a 2024')
} else {
  // Caso de éxito
  let aniosPersona = 2024 - fechaNacimiento
  
  document.write("Hola usuario " + nombre + " " + apellido)
  document.write(" Tu edad estimada es: " + aniosPersona)
}

/**
 * Suma de dos números
 * let suma = Number(numero1) + Number(numero2);
 * 
 * 1.- prompt -> 'string' : '450'
 * 2.- Number(prompt) -> '450' -> 450 (numero)
 * 3.- Se asigna el número a la variable numero1
 */
// let numero1 = Number(prompt('Ingrese un número'))
// let numero2 = Number(prompt('Ingrese otro número'))

// let suma = numero1 + numero2

// console.log("La suma es")
// console.log(suma)