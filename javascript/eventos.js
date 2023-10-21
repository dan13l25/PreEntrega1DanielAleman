const aerotina = document.querySelector(".aerotina")

aerotina.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina2.nombre}</li>
    <li>Precio: ${medicina2.precio} pesos</li>
    <li>Funcion: ${medicina2.funcion}</li>
    `
    aerotina.parentNode.appendChild(contenido)
    const botonOcultar = document.querySelector(".ocultar")
    botonOcultar.addEventListener("click", function () {
    contenido.style.display = "none"
    })
})
    
const geniol = document.querySelector(".geniol")

geniol.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina4.nombre}</li>
    <li>Precio: ${medicina4.precio} pesos</li>
    <li>Funcion: ${medicina4.funcion}</li>
    `
    geniol.parentNode.appendChild(contenido)
    const botonOcultarDos = document.querySelector(".ocultarDos")
    botonOcultarDos.addEventListener("click", function () {
    contenido.style.display = "none"
    })
})

const ibupofreno = document.querySelector(".ibuprofeno")

ibupofreno.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina1.nombre}</li>
    <li>Precio: ${medicina1.precio} pesos</li>
    <li>Funcion: ${medicina1.funcion}</li>
    `
    ibupofreno.parentNode.appendChild(contenido)
    const botonOcultarTres = document.querySelector(".ocultarTres")
    botonOcultarTres.addEventListener("click", function () {
    contenido.style.display = "none"
    })
})

const sertal = document.querySelector(".sertal")

sertal.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina3.nombre}</li>
    <li>Precio: ${medicina3.precio} pesos</li>
    <li>Funcion: ${medicina3.funcion}</li>
    `
    sertal.parentNode.appendChild(contenido)
    const botonOcultarCuatro = document.querySelector(".ocultarCuatro")
    botonOcultarCuatro.addEventListener("click", function () {
    contenido.style.display = "none"
    })
})



const seleccionar = document.querySelector("#atencion")
const calendario = document.querySelector(".calendario")
const consulta = document.querySelector(".consulta")

seleccionar.addEventListener("change", () =>{
    const opciónDeAtencion = seleccionar.value
    if(opciónDeAtencion === "consulta"){
        turno.style.display = "none"
        consulta.innerHTML = `
        <h3>Horario de atención</h3>
        <p>Desde 08:00 am hasta 13:00 pm 
        a la tarde desde 17:00 pm hasta 21:00</p>
        <h3>Metodo de pago</h3>
        <p>Se acepta tarjeta de crédito, débito, efectivo y transferencia</p>
        `
    }else if (opciónDeAtencion === "turnos") {
      consulta.innerHTML = ``
        generarCalendario()
        filtrarDoctores()
        crearBotonesHorario()
    }else if(opciónDeAtencion === "salir"){
        window.location.reload()
    }
})


let mesActual = new Date()

function generarCalendario() {
  const primerDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth(), 1)
  const ultimoDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0)
  const cuerpoCalendario = document.getElementById('cuerpo-calendario')
  cuerpoCalendario.innerHTML = ''

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
          celda.addEventListener("click", function() {
            const fechaClic = parseInt(celda.textContent, 10)
            if (fechaClic === 1 || fechaClic === 8 || fechaClic === 15 || fechaClic === 22 || fechaClic === 29) {
                horario.innerHTML = `
                <h3>No se atiende los domingos</h3>
                `
            } else {
                horario.innerHTML = `
                <h3>Has elegido el día ${fechaClic} </h3> 
                `
                sistemaDeTurnos(1, 60)
                
            }
        });
          fila.appendChild(celda)
      }
      cuerpoCalendario.appendChild(fila)
  }
};

document.getElementById('btnMesAnterior').addEventListener('click', () => {
    mesActual.setMonth(mesActual.getMonth() - 1)
    generarCalendario()
});

document.getElementById('btnMesSiguiente').addEventListener('click', () => {
    mesActual.setMonth(mesActual.getMonth() + 1)
    generarCalendario()
});

const horario = document.querySelector (".horario")
const turno = document.querySelector (".turno")

const doctor = document.querySelector(".doctor")



  
function mostrarResultado(doctoresFiltrados) {
    const resultadoDoctoresDiv = document.getElementById('resultadoDoctores');
    resultadoDoctoresDiv.innerHTML = ''
  
    if (doctoresFiltrados.length === 0) {
      resultadoDoctoresDiv.textContent = 'No se encontraron doctores que coincidan con los criterios de búsqueda.'
      return
    }
  
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
    });
  }


  function filtrarDoctores() {
    const generoSeleccionado = document.getElementById('generoSelect').value
    const especialidadSeleccionada = document.getElementById('especialidadSelect').value
    
    const resultadoDoctores = doctores.filter(doctor => {
      if (generoSeleccionado && doctor.genero !== generoSeleccionado) {
        return false
      }
      if (especialidadSeleccionada && doctor.especialidad !== especialidadSeleccionada) {
        return false
      }
      return true
    });
    
    mostrarResultado(resultadoDoctores)
    
    const opciónDeAtencion = seleccionar.value
    if (opciónDeAtencion === "turnos") {
      document.getElementById('doctorSelectionForm').style.display = 'block'
    } else {
      document.getElementById('doctorSelectionForm').style.display = 'none'
    }
  }

