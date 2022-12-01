$(document).ready(function () {
    $(window).scroll(function () {
        $('nav').toggleClass("fixed-top", ($(window).scrollTop() > 60));
    });
});

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
    $("a").click(function(){
        $(".mobile-nav").removeClass("is-active");
        $(".hamburger").removeClass("is-active")
    });
});
