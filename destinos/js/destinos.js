
window.onscroll = function () { scrollFunction() };

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

  fadeIn();
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav").classList.add("scroll");
  } else {
    document.querySelector(".nav").classList.remove("scroll");
  }
}