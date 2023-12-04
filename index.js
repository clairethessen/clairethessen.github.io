const gallery=document.querySelectorAll(".gallery-wrap");

//NAV CONTROLS

const hamburgerButton=document.querySelector('[data-js="hamburger"]');
const nav=document.querySelector(".navbar");

hamburgerButton.addEventListener("click",function(){
    nav.classList.toggle("active");
    console.log("active");
}
)

src="https://player.vimeo.com/api/player.js"


if(gallery.length>0){
    var mq = window.matchMedia( "(min-width: 500px)" );
    if (mq.matches) {

        gallery.forEach(element =>{
            const backButton=$(element).find('[data-js="backButton"]');
            const forwardButton=$(element).find('[data-js="forwardButton"]');
    
            $(element).find('.gallery').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                prevArrow:$(backButton),
                nextArrow:$(forwardButton),
    
    
            });
        });

    }

    else{
        console.log("mobile slider");
        gallery.forEach(element =>{
            const backButton=$(element).find('[data-js="backButton"]');
            const forwardButton=$(element).find('[data-js="forwardButton"]');
    
            $(element).find('.gallery').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                prevArrow:$(backButton),
                nextArrow:$(forwardButton),
    
    
            });
        });
    }



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

