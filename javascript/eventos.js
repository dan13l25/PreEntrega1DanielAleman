function medicinas(){
  const aerotina = document.querySelector(".articuloUno")
    aerotina.innerHTML = `
    <button class="mostrar">Ver descripcion</button>
    <button class="ocultar">Ocultar descripcion</button>
    <div class="informacionUno">
      <img src="./img/aerotina.jpg" alt="caja de aerotina">
      <li>${medicina2.nombre}</li>
      <li>Precio: ${medicina2.precio} pesos</li>
      <li>Funcion: ${medicina2.funcion}</li>
    </div>  
    `
    aerotina.parentNode.appendChild(aerotina)
    const botonOcultar = document.querySelector(".ocultar")
    const mostrar = document.querySelector(".mostrar")
    const informacionUno = document.querySelector(".informacionUno")
    botonOcultar.addEventListener("click", function () {
    informacionUno.style.display = "none"
    })
    mostrar.addEventListener("click", function(){
      informacionUno.style.display = "block"
    })

  const geniol = document.querySelector(".articuloDos")
    geniol.innerHTML = `
    <button class="mostrarDos">Ver descripcion</button>
    <button class="ocultarDos">Ocultar descripcion</button>
    <div class="informacionDos">
      <img src="./img/geniol.png" alt="caja de geniol">
      <li>${medicina4.nombre}</li>
      <li>Precio: ${medicina4.precio} pesos</li>
      <li>Funcion: ${medicina4.funcion}</li>
    </div>
    `
    geniol.parentNode.appendChild(geniol)
    const botonOcultarDos = document.querySelector(".ocultarDos")
    const mostrarDos = document.querySelector(".mostrarDos")
    const informacionDos = document.querySelector(".informacionDos")
    botonOcultarDos.addEventListener("click", function () {
    informacionDos.style.display = "none"
    })
    mostrarDos.addEventListener("click", function(){
      informacionDos.style.display = "block"
    })
  
  const ibupofreno = document.querySelector(".articuloTres")
      ibupofreno.innerHTML = `
      <button class="mostrarTres">Ver descripcion</button>
      <button class="ocultarTres">Ocultar descripcion</button>
      <div class="informacionTres">
        <img src="./img/ibuprofeno.jpg" alt="caja de ibuprofeno">
        <li>${medicina1.nombre}</li>
        <li>Precio: ${medicina1.precio} pesos</li>
        <li>Funcion: ${medicina1.funcion}</li>
      </div>
      `
      ibupofreno.parentNode.appendChild(ibupofreno)
      const botonOcultarTres = document.querySelector(".ocultarTres")
      const mostrarTres = document.querySelector(".mostrarTres")
      const informacionTres = document.querySelector(".informacionTres")
      botonOcultarTres.addEventListener("click", function () {
      informacionTres.style.display = "none"
      })
      mostrarTres.addEventListener("click", function(){
        informacionTres.style.display = "block"
      })

  const sertal = document.querySelector(".articuloCuatro")
      sertal.innerHTML = `
      <button class="mostrarCuatro">Ver descripcion</button>
      <button class="ocultarCuatro">Ocultar descripcion</button>
      <div class="informacionCuatro">
        <img src="./img/sertal perlas.jpg" alt="caja de sertal perlas">
        <li>${medicina3.nombre}</li>
        <li>Precio: ${medicina3.precio} pesos</li>
        <li>Funcion: ${medicina3.funcion}</li>
      </div>
      `
      sertal.parentNode.appendChild(sertal)
      const botonOcultarCuatro = document.querySelector(".ocultarCuatro")
      const mostrarCuatro = document.querySelector(".mostrarCuatro")
      const informacionCuatro = document.querySelector(".informacionCuatro")
      botonOcultarCuatro.addEventListener("click", function () {
      informacionCuatro.style.display = "none"
      })
      mostrarCuatro.addEventListener("click", function(){
        informacionCuatro.style.display = "block"
      })
}

const farmacia = document.querySelector(".farmacia")
const letrero = document.querySelector(".letrero")



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
      farmacia.style.display = "none"
        generarCalendario()
        formularioDoctor()
        crearBotonesHorario()
    }else if(opciónDeAtencion === "farmacia"){
        medicinas()
        precioDeMercado()
    }else if(opciónDeAtencion === "salir"){
      window.location.reload()
  }
})


let mesActual = new Date()

function generarCalendario() {
  const mesSiguiente = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 1)
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

  let fechaActual = 1

  for (let i = 0; i < 6; i++) {
    const fila = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const celda = document.createElement('td');
      if (i === 0 && j < primerDiaDelMes.getDay()) {
        celda.textContent = ''
      } else if (fechaActual > ultimoDiaDelMes.getDate()) {
        celda.textContent = ''
      } else {
        celda.textContent = fechaActual
        fechaActual++;
        }
        celda.addEventListener("click", function() {
          const fechaClic = parseInt(celda.textContent, 10)
          if (fechaClic === 5 || fechaClic === 12 || fechaClic === 19 || fechaClic === 26 ) {
              horario.innerHTML = `
              <h3>No se atiende los domingos</h3>
              `
          } else {
              horario.innerHTML = `
              <h3>Has elegido el día ${fechaClic} </h3> 
              `
              generarNumeroDeTurno(primerTurno, ultimoTurno)
              .then((mensaje) => {
                turnoNumero.innerHTML = `<h3>${mensaje}</h3>`;
              })
              .catch((error) => {
                turnoNumero.innerHTML = `<h3>${error}</h3>`;
                Swal.fire({
                  title: 'Error',
                  text: error,
                  icon: 'error',
                  confirmButtonText: 'Aceptar'
                })
  })
                confirmarTurno()
                localStorage.setItem('mensajeDiaEscogido', `Has elegido el día ${fechaClic}`)
            }
        })
          fila.appendChild(celda)
      }
      cuerpoCalendario.appendChild(fila)
  }

  document.getElementById('btnMesAnterior').addEventListener('click', () => {
      mesActual.setMonth(mesActual.getMonth() - 1)
      generarCalendario()
  })

  document.getElementById('btnMesSiguiente').addEventListener('click', () => {
      mesActual.setMonth(mesActual.getMonth() + 1)
      generarCalendario()
  })
}



const horario = document.querySelector (".horario")
const doctor = document.querySelector(".doctor")



function mostrarResultado(doctoresFiltrados) {
  const resultadoDoctoresDiv = document.getElementById('resultadoDoctores')
  resultadoDoctoresDiv.innerHTML = ''

  if (doctoresFiltrados.length === 0) {
    resultadoDoctoresDiv.textContent = 'No se encontraron doctores que coincidan con los criterios de búsqueda.'
    return;
  }

  const doctoresInfo = [];

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
    `;
    doctorDiv.appendChild(texto)

    resultadoDoctoresDiv.appendChild(doctorDiv)

    doctoresInfo.push({
      nombre: doctor.nombre,
      especialidad: doctor.especialidad,
      genero: doctor.genero,
      duracion: doctor.duracion,
      recibido: doctor.recibido,
    });
  });

  localStorage.setItem('doctoresInfo', JSON.stringify(doctoresInfo))
}


function formularioDoctor() {
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
  `

  const filtrarBoton = document.querySelector('.filtrar')
  filtrarBoton.addEventListener('click', function () {
    filtrarDoctores()
  })

  function filtrarDoctores() {
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
    mostrarResultado(resultadoDoctores);
  }
}


