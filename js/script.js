//slider
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
              }
            },
          ]
    });
});
// smooth scroll
let anchors = document.querySelectorAll('header a[href*="#"]');

for(anchor of anchors){
    if(anchor){
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior : 'smooth', block : 'start'
            })
        })
    }
}
//mobile__menu
let burgerButton = document.querySelector(".burger");
let mobileMenu = document.querySelector(".mobile__menu");
let links = document.querySelectorAll('#mobileLink');

for(link of links){
  link.addEventListener('click', function(event){
    event.preventDefault();
    mobileMenu.classList.toggle('mobile__menu__active');
  })
}


burgerButton.addEventListener('click', function(){
  mobileMenu.classList.toggle('mobile__menu__active');
  burgerButton.classList
})

