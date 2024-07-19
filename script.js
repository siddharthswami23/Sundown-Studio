const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var fullscr = document.getElementById("full-scr");
var menu = document.querySelector("#nav h2");
var flag = 0;
menu.addEventListener("click", function () {
    

    if (flag == 0) {
        gsap.to(fullscr,{
            height:"100vh",
            opacity:1,
            display:"block",
            duration:0.25
        })
        
        flag = 1
    } 
    else {
        gsap.to(fullscr,{
            height:"0vh",
            opacity:0,
            display:"none",
            duration:0.25
        })
        flag = 0
    }

});


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

loaderAnimation();