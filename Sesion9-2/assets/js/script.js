const input = document.querySelector("#inputUsuario")

function cambios(event) {
  event.preventDefault()
  console.dir(event.target.value)

  console.log('-------------')
  console.log('Ha ocurrido un cambio')
  let parrafo = document.querySelector("#resultado")
  parrafo.innerText = event.target.value
}

input.addEventListener("change", cambios)
