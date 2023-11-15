const seleccionar = document.querySelector("#atencion")
const calendario = document.querySelector(".calendario")
const consulta = document.querySelector(".consulta")

seleccionar.addEventListener("change", () =>{
    const opciónDeAtencion = seleccionar.value
    if(opciónDeAtencion === "consulta"){
      consulta.innerHTML = `
      <h3>Horario de atención</h3>
      <p>Desde 08:00 am hasta 13:00 pm 
      a la tarde desde 17:00 pm hasta 21:00</p>
      <h3>Metodo de pago</h3>
      <p>Se acepta tarjeta de crédito, débito, efectivo y transferencia</p>
        `
    }else if (opciónDeAtencion === "turnos") {
      consulta.innerHTML = ``
        generarCalendario(new Date())
        formularioDoctor(doctores)
        crearBotonesHorario(horasMañana, horasMañanaDiv)
    }else if(opciónDeAtencion === "salir"){
      window.location.reload()
  }
})

let mesActual = new Date()


function generarCalendario(fecha) {
  const mesSiguiente = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 1)
  const primerDiaDelMes = new Date(mesSiguiente.getFullYear(), mesSiguiente.getMonth(), 1)
  const ultimoDiaDelMes = new Date(mesSiguiente.getFullYear(), mesSiguiente.getMonth() + 1, 0)
  const cuerpoCalendario = document.getElementById('cuerpo-calendario')
  cuerpoCalendario.innerHTML = ''

  cuerpoCalendario.innerHTML = `
    <h1>Calendario</h1>
    <div class="nav-buttons">
        <button id="btnMesAnterior">Mes Anterior</button>
        <button id="btnMesSiguiente">Mes Siguiente</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Domingo</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
            </tr>
        </thead>
    </table>
  `

  generarDias(primerDiaDelMes, ultimoDiaDelMes, cuerpoCalendario)
  agregarEventos(fecha)
}

function generarDias(primerDiaDelMes, ultimoDiaDelMes, cuerpoCalendario) {
  let fechaActual = 1

  for (let i = 0; i < 6; i++) {
    const fila = document.createElement('tr')
    for (let j = 0; j < 7; j++) {
      const celda = document.createElement('td')
      if (i === 0 && j < primerDiaDelMes.getDay()) {
        celda.textContent = ''
      } else if (fechaActual > ultimoDiaDelMes.getDate()) {
        celda.textContent = ''
      } else {
        celda.textContent = fechaActual
        fechaActual++
      }
      agregarEventoCelda(celda)
      fila.appendChild(celda)
    }
    cuerpoCalendario.appendChild(fila)
  }
}


function agregarEventoCelda(celda) {
  celda.addEventListener("click", function () {
    const fechaClic = parseInt(celda.textContent, 10)
    manejarClickFecha(fechaClic)
  });
}

function manejarClickFecha(fechaClic) {
  const horario = document.querySelector (".horario")
  if ([3, 10, 17, 24, 31].includes(fechaClic)) {
    horario.innerHTML = `<h3>No se atiende los domingos</h3>`
  } else {
    horario.innerHTML = `<h3>Has elegido el día ${fechaClic} </h3>`
    generarNumeroDeTurno(primerTurno, ultimoTurno)
      .then((mensaje) => {
        turnoNumero.innerHTML = `<h3>${mensaje}</h3>`
      })
      .catch((error) => {
        turnoNumero.innerHTML = `<h3>${error}</h3>`
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      })
    confirmarTurno(".confirmar")
    localStorage.setItem('mensajeDiaEscogido', `Has elegido el día ${fechaClic}`)
  }
}

function agregarEventos(mesActual) {
  document.getElementById('btnMesAnterior').addEventListener('click', () => {
    mesActual.setMonth(mesActual.getMonth() - 1)
    generarCalendario(mesActual)
  });

  document.getElementById('btnMesSiguiente').addEventListener('click', () => {
    mesActual.setMonth(mesActual.getMonth() + 1)
    generarCalendario(mesActual)
  });
}

const horario = document.querySelector (".horario")
const doctor = document.querySelector(".doctor")

function guardarResultado(doctoresFiltrados) {
  const resultadoDoctoresDiv = document.getElementById('resultadoDoctores')
  resultadoDoctoresDiv.innerHTML = ''

  if (doctoresFiltrados.length === 0) {
    resultadoDoctoresDiv.textContent = 'No se encontraron doctores que coincidan con los criterios de búsqueda.'
    return
  }

  const doctoresInfo = []

  doctoresFiltrados.forEach(doctor => {
    const doctorDiv = document.createElement('div')
    const foto = document.createElement('img')
    foto.src = doctor.foto
    foto.alt = `Foto de ${doctor.nombre}`
    doctorDiv.appendChild(foto)

    const texto = document.createElement('div')
    texto.innerHTML = `
      <li>${doctor.nombre}</li>
      <li>${doctor.especialidad}</li>
      <li>${doctor.genero}</li>
      <li>${doctor.duracion}</li>
      <li>${doctor.recibido}</li>
    `
    doctorDiv.appendChild(texto)

    resultadoDoctoresDiv.appendChild(doctorDiv)

    doctoresInfo.push({
      nombre: doctor.nombre,
      especialidad: doctor.especialidad,
      genero: doctor.genero,
      duracion: doctor.duracion,
      recibido: doctor.recibido,
    })
  })

  localStorage.setItem('doctoresInfo', JSON.stringify(doctoresInfo))
}

function formularioDoctor(doctores) {
  const formulario = document.querySelector('.formulario')
  formulario.innerHTML = `
    <form id="doctorSelectionForm">
      <label for="generoSelect">Género:</label>
      <select id="generoSelect">
        <option value="">Todos</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
      </select>

      <label for="especialidadSelect">Especialidad:</label>
      <select id="especialidadSelect">
        <option value="">Todas</option>
        <option value="Pediatria">Pediatria</option>
        <option value="Dermatologia">Dermatologia</option>
        <option value="Cardiologia">Cardiologia</option>
        <option value="Fisioterapia">Fisioterapia</option>
      </select>

      <button type="button" class="filtrar" id="filtrarButton">Filtrar</button>
    </form>
    
    <div id="resultadoDoctores"></div>
  `

  const filtrarBoton = document.querySelector('.filtrar')
  filtrarBoton.addEventListener('click', function () {
    filtrarDoctores(doctores)
  })

function mostrarResultado(resultados) {
  const resultadosDiv = document.getElementById('resultadoDoctores')
  resultadosDiv.innerHTML = ''

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = 'No se encontraron doctores que coincidan con los criterios seleccionados.'
  } else {
    resultados.forEach(doctor => {
      const cardDoctor = document.createElement('div')
      cardDoctor.classList.add('card-doctor')
      cardDoctor.innerHTML = `
        <img src="${doctor.foto}" alt="${doctor.nombre}">
        <h3>${doctor.nombre}</h3>
        <p>${doctor.especialidad}</p>
        <p>${doctor.duracion}</p>
        <p>${doctor.recibido}</p>
      `
      resultadosDiv.appendChild(cardDoctor)
    })
  }
}

function filtrarDoctores(doctores) {
  const generoSeleccionado = document.getElementById('generoSelect').value
  const especialidadSeleccionada = document.getElementById('especialidadSelect').value

  const resultadoDoctores = doctores.filter((doctor) => {
    if (generoSeleccionado && doctor.genero !== generoSeleccionado) {
      return false
    }
    if (especialidadSeleccionada && doctor.especialidad !== especialidadSeleccionada) {
      return false
    }
    return true
  })
  guardarResultado(resultadoDoctores)
  }
}

