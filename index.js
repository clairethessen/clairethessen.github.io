const gallery=document.querySelector(".gallery");
const backButton=document.querySelector('[data-js="backButton"]');
const forwardButton=document.querySelector('[data-js="forwardButton"]');
const hamburgerButton=document.querySelector('[data-js="hamburger"]');
const nav=document.querySelector(".navButtons");

if(gallery){
    $(gallery).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:$(backButton),
        nextArrow:$(forwardButton),
    });
}

if(backButton){
    $(backButton).slick({
    backgroundColor: 'transparent',
    color:'transparent',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  });
}

hamburgerButton.addEventListener("click",function(){
    nav.classList.toggle("active");
}
)