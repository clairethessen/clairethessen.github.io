const gallery=document.querySelector(".gallery");
const backButton=document.querySelector('[data-js="backButton"]');
const forwardButton=document.querySelector('[data-js="forwardButton"]');


if(gallery){
    $(gallery).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode:true,
        prevArrow:$(backButton),
        nextArrow:$(forwardButton),
    });
}

