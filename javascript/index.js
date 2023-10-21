function Medicina (nombre, precio, funcion){
  this.nombre = nombre;
  this.precio = precio;
  this.funcion = funcion;
}
const medicina1 = new Medicina ("Ibupofreno", 850, "Ayuda a bajar la fiebre y baja la fiebre");
const medicina2 = new Medicina ("Aerotina",975, "Sirve para las alergias");
const medicina3 = new Medicina ("Sertal Perlas",1120, "Para aliviar dolores digestivos");
const medicina4 = new Medicina ("Geniol",1050, "Para dolores de cabeza, musculares y articulares");

/*
function preguntas(consulta) {
  if (consulta === "horario de atención") {
    alert("Horario de atención: 8:00 am hasta 13:00 pm" + "\n" + "17:00 pm hasta 21:00");
  } else if (consulta === "metodo de pago") {
    alert("Se acepta tarjeta de crédito, débito, efectivo y transferencia");
  } else if (consulta === "farmacia") {
    const listaMedicinas = [
      "Medicina 1:\nNombre: " + medicina1.nombre + "\nPrecio: " + "$" + medicina1.precio + "\nFunción: " + medicina1.funcion,
      "Medicina 2:\nNombre: " + medicina2.nombre + "\nPrecio: " + "$" + medicina2.precio + "\nFunción: " + medicina2.funcion,
      "Medicina 3:\nNombre: " + medicina3.nombre + "\nPrecio: " + "$" + medicina3.precio + "\nFunción: " + medicina3.funcion,
      "Medicina 4:\nNombre: " + medicina4.nombre + "\nPrecio: " + "$" + medicina4.precio + "\nFunción: " + medicina4.funcion
    ];
    alert("Lista de medicinas:\n\n" + listaMedicinas.join("\n\n"));
  } else {
    alert("Error, inténtelo de nuevo");
  }
}


function elegirLaConsulta() {
  let consulta = prompt("Elija la consulta sobre:" + "\n" + " horario de atención" + "\n " + "método de pago" + "\n " + "farmacia");
  if (consulta === "horario de atención" || consulta === "método de pago" || consulta === "farmacia") {
    preguntas(consulta);
  } else {
    alert("Opción inválida");
  }
}

function diasDeSemana(dias) {
  const numeroDia = prompt("Escoja un día de la semana").toLowerCase();
  let dia;
  switch (numeroDia) {
    case "lunes":
      dia = "Lunes";
      break;
    case "martes":
      dia = "Martes";
      break;
    case "miércoles":
      dia = "Miércoles";
      break;
    case "jueves":
      dia = "Jueves";
      break;
    case "viernes":
      dia = "Viernes";
      break;
    case "sábado":
      dia = "Sábado";
      break;
    case "domingo":
      dia = "Domingo";
      break;
    default:
      alert("Valor inválido");
      break;
  }
  if (dia === "Domingo") {
    alert("No se atiende los domingos");
  } else {
    alert(`Elegiste el día ${dia}`);
  }
}



function salida() {
  alert("Fin de proceso");
}
function sistemaDeAtencion() {
  let opciones = prompt("elija una opción" + "\n" + '1: consulta' + "\n" + '2: pedir turno' + "\n" + '3: salir' );
  switch (opciones) {
    case "1":
      elegirLaConsulta();
      sistemaDeAtencion();
      break;
    case "2":
      diasDeSemana(dias);
      sistemaDeTurnos(1, 60);
      break;
    case "3":
      salida();
      break;
    default:
      alert("Error en la operación");
      sistemaDeAtencion();
  }
}

sistemaDeAtencion();



//escribir en mayuscula la primera letra del genero y la clase de doctor
let genero = prompt("Quiere ser atendido por un Hombre o una Mujer");
let especialidad = prompt("Escoge al doctor que pueda ayudarte con tu problema" + "\n" + "Pediatria" + "\n" + "Dermatologia" +
  "\n" + "Cardiologia" + "\n" + "Fisioterapia");

const seleccionarDoctor = {
  genero: genero,
  especialidad: especialidad,
  duracion: ''
};

function verDoctores(doctores) {
  doctores.forEach(item => alert(
    item.genero + '\n' +
    item.nombre + '\n' +
    item.especialidad + '\n' +
    item.duracion + '\n' +
    item.recibido
  ));
}

function elegirDoctor() {
  const busqueda = doctores.filter(filtrarGenero).filter(filtrarEspecialidad);
  console.log(busqueda);
  if (busqueda.length > 0) {
    verDoctores(busqueda);
  } else {
    console.error("No hay resultado");
  }
}

function filtrarGenero(item) {
  if (seleccionarDoctor.genero) {
    return item.genero === seleccionarDoctor.genero;
  }
  return item;
}

function filtrarEspecialidad(item) {
  if (seleccionarDoctor.especialidad) {
    return item.especialidad === seleccionarDoctor.especialidad;
  }
  return item;
}

elegirDoctor ();
*/
const doctores = [
  {
    genero: 'Hombre',
    nombre: 'Cristian Ochoa',
    especialidad: 'Pediatria',
    duracion: 'Tiene 9 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de Buenos Aires',
    foto: './img/pediatra.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Martina Luna',
    especialidad: 'Pediatria',
    duracion: 'Tiene 12 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad del Salvador',
    foto: './img/pediatra 2.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Alejandro Gutierrez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 1 año ejerciendo la carrera',
    recibido: 'Graduado de la Fundación Barcelona',
    foto: './img/dermatologo.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Emilce Dominguez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 5 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Católica Argentina',
    foto: './img/dermatologa.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Ivan Gonzales',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 11 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Rosario',
    foto: './img/cardiologo.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Sofia Perez',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 6 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Tucumán',
    foto: './img/cardiologa.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Lucas Torres',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 7 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de Ciencias Empresariales y Sociales',
    foto: './img/fisioterapia.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Daniela Guzman',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 3 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Austral',
    foto: './img/Fisioterapia 2.jpg',
  },
]

function sistemaDeTurnos(primerTurno, ultimoTurno) {
  let numeroDeTurno = Math.ceil(Math.random() * 70)
  while (primerTurno >= 1 && ultimoTurno <= 60) {
    if (numeroDeTurno <= ultimoTurno) {
      turno.innerHTML = `
      <h3>Su número de turno es ${numeroDeTurno}</h3>
      `
    } else {
      turno.innerHTML = `
      <h3>Ya no hay turnos para ese día</h3>
      `
    }
    break
  }
}

const horaElegida = document.querySelector(".horaEscogida")
let botonesCreados = false

function imprimirHora(hora) {
  horaElegida.innerHTML = `
    <h3>Seleccionaste la hora ${hora}</h3>
  `
}

const horasMañana = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
const horasMañanaDiv = document.querySelector(".horasMañana");

function crearBotonesHorario() {
  if (!botonesCreados) {
    horasMañana.forEach(function(hora) {
      const boton = document.createElement("button")
      boton.textContent = hora
      boton.addEventListener("click", function() {
        imprimirHora(hora)
      })
      horasMañanaDiv.appendChild(boton)
    })
    botonesCreados = true
  }
}

/*function escogerHorario(hora){
  if (opciónDeAtencion === "turnos")
    imprimirHora(hora)
  else{
    horaElegida.innerHTML = `<p>ppp</p>`
  }
}*/

