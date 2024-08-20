document.addEventListener("DOMContentLoaded", function(event) {
  //código a ejecutar cuando existe la certeza de que el DOM está listo para recibir acciones

  
  // Apuntamos al formulario
  // tag -> 
  // let formulario = document.getElementsByTagName('form')
  let formulario = document.querySelector("form")
  
  formulario.addEventListener("submit", function(event) {
    event.preventDefault()

    console.log(event.target)
    /** 
     * Selección de elementos INPUT, y sus valores 
     * con .value leemos datos ingresado por usuario
     **/
    const email = document.getElementById("exampleInputEmail1").value
    const password = document.getElementById("exampleInputPassword1").value
    const check = document.getElementById("exampleCheck1").value

    /**
     * Interpolación de texto
     * `bactick ${variable_a_mostrar}`
     */
    let mensaje = `El mail es ${email} el password es ${password}`

    /** enviar un alerta */
    alert(mensaje)

    console.log("Formulario enviado 🕊️")
  })

});

