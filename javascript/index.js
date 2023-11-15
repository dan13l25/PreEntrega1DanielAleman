let medico = []
fetch ("./javascript/medicos.json")
  .then(response => response.json ())
  .then(data => {
    doctores = data
  })

function Medicina (nombre, precio, funcion){
  this.nombre = nombre
  this.precio = precio
  this.funcion = funcion
}
const medicina1 = new Medicina ("Ibupofreno", 850, "Ayuda a bajar la fiebre y baja la fiebre")
const medicina2 = new Medicina ("Aerotina",975, "Sirve para las alergias")
const medicina3 = new Medicina ("Sertal Perlas",1120, "Para aliviar dolores digestivos")
const medicina4 = new Medicina ("Geniol",1050, "Para dolores de cabeza, musculares y articulares")

function generarNumeroDeTurno(primerTurno, ultimoTurno) {
  return new Promise((resolve, reject) => {
    let numeroDeTurno = Math.ceil(Math.random() * 70)

    if (primerTurno >= 1 && ultimoTurno <= 60) {
      if (numeroDeTurno <= ultimoTurno) {
        const mensaje = `Su número de turno es ${numeroDeTurno}`
        localStorage.setItem('numeroDeTurno', numeroDeTurno)
        resolve(mensaje)
      } else {
        const mensaje = 'Ya no hay turnos para ese día'
        reject(mensaje)
      }
    } else {
      const mensaje = 'Error en los valores de primerTurno y ultimoTurno'
      reject(mensaje)
    }
  })
}

const primerTurno = 10
const ultimoTurno = 60
const turnoNumero = document.querySelector (".turnoNumero")

const horaElegida = document.querySelector(".horaEscogida")

function imprimirHora(hora) {
  horaElegida.innerHTML = `
    <h3>Seleccionaste la hora ${hora}</h3>
  `
  localStorage.setItem('horaElegida', hora)
}

function crearBotonesHorario(arrayHoras, contenedor) {
  arrayHoras.forEach(function(hora) {
    const boton = document.createElement("button")
    boton.textContent = hora
    boton.addEventListener("click", function() {
      imprimirHora(hora)
    })
    contenedor.appendChild(boton)
  })
}

const horasMañana = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
const horasMañanaDiv = document.querySelector(".horasMañana")
let botonesCreados = false

const reinicio = document.querySelector(".reinicio")
const mostrarDatosBtn = document.querySelector(".mostrarDatos")
const recuperarDatosDiv = document.querySelector(".recuperarDatos")

mostrarDatosBtn.addEventListener("click", function () {
  const doctoresInfo = JSON.parse(localStorage.getItem("doctoresInfo"))
  const mensajeDiaEscogido = localStorage.getItem('mensajeDiaEscogido')
  const numeroDeTurno = localStorage.getItem('numeroDeTurno')
  const horaElegida = localStorage.getItem('horaElegida')
  const horaConfirmacion = localStorage.getItem('horaConfirmacion')

  let html = `<p>${mensajeDiaEscogido}</p>`
  html += `<p>Número de Turno: ${numeroDeTurno}</p>`
  html += `<p>Hora Confirmación: ${horaConfirmacion}</p>`
  html += `<p>Hora Elegida: ${horaElegida}</p>`
  html += "<ul>"
  doctoresInfo.forEach((doctor) => {
    html += `<li>Nombre: ${doctor.nombre}</li>`
    html += `<li>Especialidad: ${doctor.especialidad}</li>`
    html += `<li>Género: ${doctor.genero}</li>`
    html += `<li>Duración: ${doctor.duracion}</li>`
    html += `<li>Recibido: ${doctor.recibido}</li>`
  })
  html += "</ul>"

  recuperarDatosDiv.innerHTML = html
  const cancelarButton = document.createElement('button')
  cancelarButton.textContent = 'Cancelar turno'
  cancelar.appendChild(cancelarButton)

  cancelarButton.addEventListener('click', function() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No hay vuelta atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('doctoresInfo')
        localStorage.removeItem('mensajeDiaEscogido')
        localStorage.removeItem('numeroDeTurno')
        localStorage.removeItem('horaElegida')
        localStorage.removeItem('horaConfirmacion')
  
        recuperarDatosDiv.innerHTML = ''
  
        Swal.fire(
          'Listo!',
          'El turno fue cancelado',
          'success'
        ).then(() => {
          location.reload()
        })
      } else {
        location.reload()
      
      }
    })
  })
})

const cancelar = document.querySelector(".cancelar")

function confirmarTurno(contenedorSelector) {
  const confirmar = document.querySelector(contenedorSelector)  
  confirmar.innerHTML = `
    <form> 
      <input type="submit" value="Confirmar" class="confirmarBtn">
    </form>
  `
  
  const confirmarBtn = document.querySelector(".confirmarBtn")
  const hora = document.getElementById("hora").textContent

  confirmarBtn.addEventListener("click", (evt) => {
    guardarHoraEnStorage(hora)
    confirmar.reset()
  })

}

function obtenerFechaYHora(zonaHoraria) {
  fetch(`https://worldtimeapi.org/api/timezone/${zonaHoraria}`)
      .then(response => response.json())
      .then(data => {
          const fechaYHora = new Date(data.datetime)
          const fechaYHoraFormateada = fechaYHora.toLocaleString()
          document.getElementById("hora").textContent = fechaYHoraFormateada
          guardarHoraEnStorage(fechaYHoraFormateada)
      })
      .catch(error => {
          console.error("Hubo un error al obtener la hora:", error)
      })
}

function guardarHoraEnStorage(hora) {
  localStorage.setItem("horaConfirmacion", hora)
}

obtenerFechaYHora("America/Argentina/Jujuy")

setInterval(() => obtenerFechaYHora("America/Argentina/Jujuy"), 1000)
