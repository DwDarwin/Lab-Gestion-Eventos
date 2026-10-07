
// actividad 1
const parrafo1 = document.getElementById("parrafo");
const boton = document.getElementById("botonEstilo");

boton.addEventListener("click", function () {

    parrafo1.style.color = "blue";
    parrafo1.style.fontSize = "30px";
    parrafo1.style.fontFamily = 'impact';
});


// actividad 2
const formulario = document.getElementById("form1");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = formulario.elements["fname"].value;
    const apellido = formulario.elements["lname"].value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
});

// actividad 3
const boton2 = document.getElementById("botonEnlaces");

boton2.addEventListener("click", function () {

    const enlaces = document.querySelectorAll("a");

    const totalEnlaces = enlaces.length;
    const primerEnlace = enlaces[0];
    const ultimoEnlace = enlaces[enlaces.length - 1];

    alert(
        "Número total de enlaces: " + totalEnlaces +
        "\nPrimer enlace: " + primerEnlace.href +
        "\nÚltimo enlace: " + ultimoEnlace.href
    );
});