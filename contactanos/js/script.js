window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".nav").classList.add("scroll");
    } else {
        document.querySelector(".nav").classList.remove("scroll");
    }
}

$(".agradecimiento").hide();
let email = document.getElementById("email");
let texto = document.getElementById("mensaje");
let msj = document.getElementById("mensajeError");
let ok = false;
let btn = document.getElementById("enviar").addEventListener("click", function () {
    msj.innerHTML = "";
    if (email.value.length == 0 || email.value == null) {
        msj.innerHTML = "Por favor rellene el campo email";
    }
    if (texto.value.length == 0 || texto.value == null) {
        msj.innerHTML += "<br>" + "Por favor rellene el mensaje de texto";
    } else {
        ok = true;
    }

    if (ok) {
        $(".section2").slideUp("slow");

        $(".agradecimiento").show();
    }
})

