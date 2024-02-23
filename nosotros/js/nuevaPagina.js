window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".nav").classList.add("scroll");
    } else {
        document.querySelector(".nav").classList.remove("scroll");
    }
}