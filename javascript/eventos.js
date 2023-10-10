/*const aerotina = document.querySelector(".aerotina");

aerotina.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina2.nombre}</li>
    <li>Precio: ${medicina2.precio} pesos</li>
    <li>Funcion: ${medicina2.funcion}</li>
    `;
    aerotina.parentNode.appendChild(contenido);
    const botonOcultar = document.querySelector(".ocultar");
    botonOcultar.addEventListener("click", function () {
    contenido.style.display = "none";
    })
})
    
const geniol = document.querySelector(".geniol");

geniol.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina4.nombre}</li>
    <li>Precio: ${medicina4.precio} pesos</li>
    <li>Funcion: ${medicina4.funcion}</li>
    `;
    geniol.parentNode.appendChild(contenido);
    const botonOcultarDos = document.querySelector(".ocultarDos");
    botonOcultarDos.addEventListener("click", function () {
    contenido.style.display = "none";
    })
})

const ibupofreno = document.querySelector(".ibuprofeno");

ibupofreno.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina1.nombre}</li>
    <li>Precio: ${medicina1.precio} pesos</li>
    <li>Funcion: ${medicina1.funcion}</li>
    `;
    ibupofreno.parentNode.appendChild(contenido);
    const botonOcultarTres = document.querySelector(".ocultarTres");
    botonOcultarTres.addEventListener("click", function () {
    contenido.style.display = "none";
    })
})

const sertal = document.querySelector(".sertal");

sertal.addEventListener("click", function(){
    let contenido = document.createElement("div")
    contenido.innerHTML = `
    <li>${medicina3.nombre}</li>
    <li>Precio: ${medicina3.precio} pesos</li>
    <li>Funcion: ${medicina3.funcion}</li>
    `;
    sertal.parentNode.appendChild(contenido);
    const botonOcultarCuatro = document.querySelector(".ocultarCuatro");
    botonOcultarCuatro.addEventListener("click", function () {
    contenido.style.display = "none";
    })
})*/

const seleccionar = document.querySelector("#atencion");
const calendario = document.querySelector(".calendario");
const consulta = document.querySelector(".consulta")

seleccionar.addEventListener("change", () =>{
    const opciónDeAtencion = seleccionar.value;
    if(opciónDeAtencion === "consulta"){
        consulta.innerHTML = `
        <h3>Horario de atención</h3>
        <p>Desde 08:00 am hasta 13:00 pm" + "\n" + "17:00 pm hasta 21:00</p>
        <h3>Metodo de pago</h3>
        <p>Se acepta tarjeta de crédito, débito, efectivo y transferencia</p>
        `;
    }else if (opciónDeAtencion === "turnos") {
        generarCalendario();
        
        
    }
});


