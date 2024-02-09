document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("miVideo");
  var playIcon = document.getElementById("playIcon");
  var imagen = document.getElementById("miImagen");

  playIcon.addEventListener("click", function () {
    imagen.style.display = "none";
    playIcon.style.display = "none";
    video.style.display = "block";
    video.play();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var titulo = document.querySelectorAll(".titulo-section3");

  function fadeIn() {
    titulo.forEach(function (element) {
      var bounding = element.getBoundingClientRect();
      if (bounding.top < window.innerHeight) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
      }
    });
  }

  window.addEventListener("scroll", fadeIn);

  // Llamada inicial para los elementos que ya están en la pantalla al cargar
  fadeIn();
});
