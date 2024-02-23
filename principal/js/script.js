window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav").classList.add("scroll");
  } else {
    document.querySelector(".nav").classList.remove("scroll");
  }
}
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $('.acceptCookies').on('click', function () {
    $('.cookie').slideUp("slow");
  });
});