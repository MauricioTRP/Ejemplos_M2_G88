/**
 * Crear las 4 operaciones básicas
 * Suma
 * Resta
 * División -> necesita que numero2 != 0
 * Multiplicación
 * 
 * Operando 2 números que entregue el usuario.
 * Terminamos mostrando la info en pantalla
 */

let numero1 = Number(  prompt('Ingrese el primer número')  )
let numero2 = Number(  prompt('Ingrese el segundo número')   )

let suma = numero1 + numero2

document.write("La suma es: " + suma)
document.write("<br>")
document.write('Nueva línea')