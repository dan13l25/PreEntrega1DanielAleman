function preguntas(consulta){
  if (consulta === "horario de atencion"){
    alert ("horario de atencion 8:00am hasta 13:00pm" +"\n" + "17:00pm hasta 21:00")
  }else if (consulta === "metodo de pago"){
    alert ("se acepta tarjetade credito, debito, efectivo y transferencia")
  }else if (consulta === "farmacia"){
    const listaMedicinas = [
      "Medicina 1:\nNombre: " + medicina1.nombre + "\nPrecio: " + "$" + medicina1.precio + "\nFuncion: " + medicina1.funcion,
      "Medicina 2:\nNombre: " + medicina2.nombre + "\nPrecio: " + "$" + medicina2.precio + "\nFuncion: " + medicina2.funcion,
      "Medicina 3:\nNombre: " + medicina3.nombre + "\nPrecio: " + "$" + medicina3.precio + "\nFuncion: " + medicina3.funcion,
      "Medicina 4:\nNombre: " + medicina4.nombre + "\nPrecio: " + "$" + medicina4.precio + "\nFuncion: " + medicina4.funcion
    ];
    alert("Lista de medicinas:\n\n" + listaMedicinas.join("\n\n"));
  }
  else {
    alert ("error intente de nuevo")
  }
}

function Medicina (nombre, precio, funcion){
  this.nombre = nombre
  this.precio = precio;
  this.funcion = funcion;
}
const medicina1 = new Medicina ("Ibupofreno", 850, "Ayuda a bajar la fiebre y baja la fiebre");
const medicina2 = new Medicina ("Aerotina",975, "Sirve para las alergias");
const medicina3 = new Medicina ("Sertal Perlas",1120, "Para aliviar dolores digestivos");
const medicina4 = new Medicina ("Geniol",1050, "Para dolores de cabeza, musculares y articulares");

const minimo = 1;
const maximo = 10;

function elegirLaConsulta(){
  let consulta = prompt ("elija la consulta sobre:" + "\n" + " horario de atencion" + "\n " + "metodo de pago" + "\n " + "farmacia");
  if (consulta === "horario de atencion" || consulta === "metodo de pago" || consulta === "farmacia"){
    preguntas(consulta);
  }else{
    alert ("opcion invalida");
  }
}

function diasDeSemana(dias) {
  const numeroDia = prompt("Escoja un dia de la semana").toLowerCase();
  let dia;
    switch (numeroDia) {
      case "lunes":
        dia = "Lunes";
        break;
      case "martes":
        dia = "Martes";
        break;
      case "miercoles":
        dia = "Miercoles";
        break;
      case "jueves":
        dia = "Jueves";
        break;
      case "viernes":
        dia = "Viernes";
        break;
      case "sabado":
        dia = "Sábado";
        break;
      case "domingo":
        dia = "Domingo";
        break;
      default:
        alert ("Valor inválido");
        break;
  }
  if (dia === "Domingo"){
    alert ("No se atiende los domigos");
  }else{
    alert (`elegiste el dia, ${dia}`);
  }
}

function sistemaDeTurnos(){
  let primerTurno = 1;
  let ultimoTurno = 60;
  let numeroDeTurno = Math.ceil(Math.random()*100);
  while (primerTurno >= 1 && ultimoTurno <= 60){
    if (numeroDeTurno <= 60){
    alert ("su numero de turno es " + numeroDeTurno)
    }else{
      alert ("Ya no hay turnos para ese dia")
    }
    break
  }
}

function salida(){
  alert("Fin de proceso");
}
function sistemaDeAtencion() {
  let opciones = prompt("elija una opcion" + "\n" + '1:consulta' + "\n" + '2:pedir turno' + "\n" + '3:salir' );
    switch (opciones){
      case "1":
        elegirLaConsulta();
        sistemaDeAtencion();
        break;
      case "2":
        diasDeSemana();
        sistemaDeTurnos();
        break;
      case "3":
        salida();
        break;
      case "4":

      default:
        alert ("error en la operacion")
        sistemaDeAtencion();
  }
}

sistemaDeAtencion();

const doctores = [
  {
    genero: 'Masculino',
    nombre:'Cristian Ochoa',
    especialidad: 'Pediatria',
    duracion: 'Tiene 9 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de Buenos Aires',
    foto: './img/pediatra.jpg',
  },
  {
    genero: 'Femenino',
    nombre:'Martina Luna',
    especialidad: 'Pediatria',
    duracion: 'Tiene 12 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad del Salvador',
  },
  {
    genero: 'Masculino',
    nombre:'Alejandro Gutierrez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 1 años ejerciendo la carrera',
    recibido: 'Graduado de la Fundación Barcelona',
  },
  {
    genero: 'Femenino',
    nombre:'Emilce Dominguez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 5 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Católica Argentina',
  },
  {
    genero: 'Masculino',
    nombre:'Ivan Gonzales',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 11 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Rosario',
  },
  {
    genero: 'Femenino',
    nombre:'Sofia Perez',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 6 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Tucúman',
  },
  {
    genero: 'Masculino',
    nombre:'Lucas Torres',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 7 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de ciencias Empresariales y Sociales',
  },
   {
    genero: 'Femenino',
    nombre:'Daniela Guzman',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 3 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Austral',
  },
];

/*let genero = prompt ("Quiere ser atendido por un hombre o una mujer");
let especialidad = prompt("Escoge al doctor que pueda ayudarte con tu problema" + "\n" + "Pediatria" + "\n" + "Dermatologia" 
+ "\n" + "Cardiologia" + "\n" + "Fisioterapia");
let duracion;

const seleccionarDoctor = {
  genero : genero,
  especialidad : especialidad,
  duracion : '',
}

function verDoctores (doctores) {
  Doctores.forEach(item => console.log (item.genero + ' - ' +  item.especialidad + ' - ' + item.duracion ));
 
}

function elegirDoctor (){
   const busqueda = doctores.filter(filtrarGenero).filter(filtrarEspecialidad);
   if (busqueda.length>0){
    verDoctores (busqueda)
   }else{
    console.error ("sin resultado");
   }
}

function filtrarGenero (item){
  if (genero){
    return item.genero === seleccionarDoctor.genero;
  }
  return item;
}

function filtrarEspecialidad (item){
  if (especialidad){
    return item.especialidad === seleccionarDoctor.especialidad;
  }
  return item;
}

/*function filtrarDuracion (item){
  if (duracion){
    return item.duracion === duracion;
  }
  return item;
}*/


//elegirDoctor ();
