function preguntas(consulta){
  if (consulta === "horario de atencion"){
    alert ("horario de atencion 8:00am hasta 13:00pm" +"\n" + "17:00pm hasta 21:00")
  }else if (consulta === "metodo de pago"){
    alert ("se acepta tarjetade credito, debito, efectivo y transferencia")
  }else {
    alert ("error intente de nuevo")
  }
}
function elegirLaConsulta(){
  let consulta = prompt ("elija la consulta sobre:" + "\n" + " horario de atencion" + "\n " + "metodo de pago");
  if (consulta === "horario de atencion" || consulta === "metodo de pago"){
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
  let opciones = prompt("elija una opcion" + "\n" + '1:consulta' + "\n" + '2:pedir turno' + "\n" + '3:salir');
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
      default:
        alert ("error en la operacion")
        sistemaDeAtencion();
  }
}
sistemaDeAtencion();

