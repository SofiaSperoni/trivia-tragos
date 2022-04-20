var intentos;
var nombreUsuario;
var nombre;
var pistas;

var preguntas = [".pregunta1", ".pregunta2", ".pregunta3", ".pregunta4", ".pregunta5", ".pregunta6", ".pregunta7", ".pregunta8", ".pregunta9", ".pregunta10", ".pregunta11", ".pregunta12", ".pregunta13", ".pregunta14"];
var listaPistas = [
    '"Raíz"',
    '"También es una ciudad"',
    '"Bien mezclado"',
    '"Bandera blanca y roja"',
    '"Incoloro"',
    '"Fruta / ácido"',
    '"De Norteamérica"',
    '"Sus protagonistas son mujeres / Basada en una serie"',
    '"Frutal"',
    '"De tonalidad rojiza"',
];

var preguntaActual = 0;

$("#mayorEdad").click(function() {
    $(".edad").slideUp();
    $(".name").removeClass("ocultar");
});

$("#menorEdad").click(function() {
    $(".inicio").slideUp();
    $(".sinAcceso").removeClass("ocultar");
});

// Ingreso del nombre:
$("#login").click(function() {
    nombre = $("#nombreInput").val();
    if (nombre === "") {
        $(".faltaNombre").removeClass("ocultar");
    } else {
        $(".intro").slideUp();
        $(".introduccion").removeClass("ocultar");
        $("#nombre").text(nombre);
    };
});

// botón comenzar:
$("#comenzar").click(function() {
    $(".introduccion").slideUp();
    $(".game").removeClass("ocultar");
    $(".pregunta1").removeClass("ocultar");
    comenzarJuego();
    mostrarPista();
})

var comenzarJuego = function() {
    intentos = 3;
    $("#intentos").text(intentos);
};

var mostrarPista = function() {
    pistas = 4;
    $("#pistas").text(pistas);
};


$("#pedirPista").click(function() {
    if (pistas !== 0) {
        pistas--;
        $("#pistas").text(pistas);
        $(".cartelPista").removeClass("ocultar");
        $(".textoPista").text(listaPistas[preguntaActual]);
    }

});

preguntas.forEach(function(pregunta, index, ) {
    $(pregunta + " > div > .correcto").click(function() {
        preguntaActual++
        $(preguntas[index]).slideUp();
        $(preguntas[index + 1]).removeClass("ocultar");
        $(".cartelPista").addClass("ocultar");
    });
});

preguntas.forEach(function(pregunta, index, ) {
    $(pregunta + " > div > .incorrecto").click(function() {
        intentos--;
        if (intentos === 0) {
            /*         $(".game").slideUp(); */
            $(".game").slideUp();
            $(preguntas[index]).slideUp();
            $(".perder").removeClass("ocultar");
        } else {
            $("#intentos").text(intentos)
            $(".cartelIncorrecto").removeClass("ocultar");
            setTimeout(function() {
                $(".cartelIncorrecto").addClass("ocultar");
            }, 2000);
        }
    });
});


$(".restart").click(function() {
    $(".perder").addClass("ocultar");
    preguntaActual = 0;
    $(".cartelPista").addClass("ocultar");
    mostrarPista();
    comenzarJuego();
    $(".game").slideDown();

    for (var i = 0; i < preguntas.length; i++) {
        $(preguntas[i + 1]).addClass("ocultar");
        $(preguntas[i]).slideDown();
    }

});