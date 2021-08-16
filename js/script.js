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
        speed: 1000
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